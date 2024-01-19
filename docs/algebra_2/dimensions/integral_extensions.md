# 8 Integral Extensions

## 8.1 Integral Closure

??? definition "Definition 8.1"
    Let $R \subseteq S$ be rings.

    Let $s \in S$. The monic

    $$f(x) = x^n + a_{n-1}x^{n-1} + \cdots + a_0 \in R[x]$$

    with $f(s) = 0$ is called an **integral equation** for $s$ over $R$.

    The element $s$ is called **integral** over $R$ if it has an integral equation over $R$.

    $S$ is called **integral** over $R$ if every element of $S$ is integral over $R$.
    Then, $S$ is called an **integral extension** of $R$.


??? example "Example 8.2"
    === "1"
        $\sqrt 2 \in \R is **integral** over $\Z$.

        $\Z[\sqrt 2]$ is an **integral extension** of $\Z$.

    === "2"
        $\frac{1}{\sqrt 2} \in \R$ is **not integral** over $\Z$.

        Assume it the converse

        $$
        \begin{align*}
            \frac{1}{\sqrt 2^n} + a_1 \frac{1}{\sqrt 2^{n-1}} + \cdots + a_n &= 0 \\
            1 + a_1 \sqrt 2 + \cdots + a_n \sqrt 2^n &= 0 \\
            1 + 2a_2 + 4a_4 + \cdots &= 0 \contradiction
        \end{align*}
        $$

    === "3"
        $s = \frac{1+\sqrt 5}{2} \in \R$ is integral over $\Z$ as $s^2 - s - 1 = 0$. It is also
        integral over $\Z[\sqrt 5]$.


??? lemma "Lemma 8.3"
    ### Integral elements and finite modules <a id="l83"></a>

    $\begin{align*}
        \text{Let } & R \subseteq S \text{ be rings} \\
        & s \in S
    \end{align*}$

    TFAE:

    **(a)** $s$ is integral over $R$.

    **(b)** $R[s] \subseteq S$ is finitely generated as an $R$-module.

    **(c)** There exists an $R[s]$-module $M$ with $\Ann(M) = 0$ and $M$ is finitely generated as an
    $R$-module.

    ??? proof
        === "(a) $\implies$ (b)"
            Let $f(x) = x^n + a_{n-1}x^{n-1} + \cdots + a_0 \in R[x]$ be an integral equation for $s$ over $R$.

            $\begin{align*}
                \text{Let } & N:=(1, s, \ldots, s^{n-1})_R=\sum_{i=0}^{n-1}Rs^i \\
                & k \ge n
            \end{align*}$

            $$
            \begin{align*}
                \implies s^{k-n} f(s) &= 0 \\
                s^k &= -(a_1s^{k-1} + a_2 s^{k-2} + \cdots + a_n s^{k-n})
            \end{align*}
            $$

            $$
            \begin{align*}
                \implies & s^k \in N \tab \forall\ k\\
                \implies & N = R[s]
            \end{align*}
            $$

        === "(b) $\implies$ (c)"
            Let $M = R[s]$

            $\begin{align*}
                \implies & 1 \in M \\
                \implies & \Ann(M) = \{0\} \\
                \overset{b}{\implies} & M \text{ is finitely generated as an } R \text{-module}
            \end{align*}$

        === "(c) $\implies$ (a)"
            $\begin{align*}
                &M = (m_1, \dots, m_n)_R \\
                &\implies \exists a_{ij} \in R : s m_i = \sum_{j=1}^r a_{ij} m_j \\
                &\implieshref{../principal_ideal_thm/#l72}{L.7.2} \det(sI - A) \in \Ann(M) = \{0\} \\
                &\implies \det(x I - A) \in R[x] \text{ is an integral equation for } s
            \end{align*}$


??? theorem "Theorem 8.4"
    ### Generate by integral elements implies integral <a id="t84"></a>

    $\begin{align*}
        \text{Let } & R \subseteq S \text{ be rings s.t.} \\
        & S = R[a_1, \dots, a_n]
    \end{align*}$

    TFAE:

    **(a)** All $a_i$ are integral over $R$.
    
    **(b)** $S$ is integral over $R$.

    **(c)** $S$ is finitely generated as an $R$-module.

    ??? proof
        === "(a) $\implies$ (c)"
            Induction on $n$: $n=1$ is [L.8.3](#l83)

            Now, let $n>1$. Then, $S' := R[a_1, \dots, a_{n-1}]$ is finitely generated as an $R$-module.

            $$ \implies S' = (m_1, \dots, m_r)_R = \sum_{i=1}^r Rm_i $$

            $a_n$ is integral over $R$.

            $$
            \begin{align*}
                \implieshref{#l83}{L.8.3} & S \text{ is finitely generated as an } S' \text{-module} \\
                & S = \sum_{j=1}^{l}S'n_j \\
                \implies & S = \sum_{i=1}^r \sum_{j=1}^l Rm_i n_j
            \end{align*}
            $$

        === "(c) $\implies$ (b)"
            Let $M=S$ be an R[a_i]-module.

            $\overset{c}{\implies} M \text{ is finitely generated as an } R \text{-module}$

            $1 \in M$.

            $\begin{align*}
                \implies &\Ann(M) = \{0\} \\
                \implieshref{#l83}{L.8.3} & a_i \text{ is integral over } R
            \end{align*}$

        === "(b) $\implies$ (a)"
            Trivial.


??? corollary "Corollary 8.5"
    ### Integral elements form a subalgebra <a id="c85"></a>

    The set

    $$S':= \{s \in S \mid s \text{ is integral over } R\} \subseteq S$$

    is an $R$-subalgebra of $S$.

    ??? proof
        Let $a, b \in S'$

        $\begin{align*}
            &\implieshref{#t84}{T.8.4} R[a, b] \text{ is integral over } R \\
            & \implies a+b, ab \text{ are integral over } R \\
        \end{align*}$


??? corollary "Corollary 8.6"
    ### Towers of integral extensions <a id="c86"></a>

    $\begin{align*}
        \text{Let } & R \subseteq S \subseteq T \text{ be rings s.t.} \\
        & T \text{ is integral over } S \\
        & S \text{ is integral over } R
    \end{align*}$

    $$ \implies T \text{ is integral over } R $$

    ??? proof
        Let $t \in T$.

        $\begin{align*}
            \implies &\exists\ s_1, \dots, s_n \in S : t^n + t^n + s_1 t^{n-1} + \cdots + s_n = 0 \\
            \implies& t \text{ is integral over } S':=R[s_1, \dots, s_n] \subseteq S \\
            \implieshref{#l83}{L.8.3} & S'[t] \text{ is finitely generated as an } S' \text{-module} \\
            \implieshref{#t84}{T.8.4} & S' \text{ is finitely generated as an } R \text{-module} \\
        \end{align*}$

        $$
        \begin{align*}
            S' &= \sum_{i=1}^{n} R n_i & n_i \in S'\\
            S'[t] &= \sum_{j=1}^{m} S' m_i & m_i \in S'[t] \\
            &= \sum_{i=1}^{n} \sum_{j=1}^{m} R n_i m_j
        \end{align*}
        $$

        So, $S'[t]$ is an $R[t]$-module that is finitely generated as an R-module.
        Moreover, $1 \in S'[t]$, so $\Ann(S'[t]) = \{0\}$.

        $\begin{align*}
            & \implieshref{#l84}{L.8.3} t \text{ is integral over } R \\
            & \implies T \text{ is integral over } R
        \end{align*}$


??? definition "Definition 8.7"
    **(a)**

    $S'$ is called the **integral closure** of $R$ in $S$.

    When $S' = R$, $R$ is called **integrally closed** in $S$.

    ---

    **(b)**

    A ring $R$ that is

    - an integral domain
    - integrally closed in $\Quot(R)$

    is called **normal**.

    ---

    **(c)**
    
    The set

    $$\tilde R:= \{s \in \Quot(R) \mid s \text{ is integral over } R\}$$

    is called the **normalization of $R$**.

    ---

    **(d)**

    Let $X$ be an irreducible affine variety over $K$. Then, $X$ is **normal** if $K[X]$ is normal.

    ---

    **(e)**

    An element $s \in S$ is called **almost integral** over $R$ if

    $$\exists\ 0 \neq c \in R : cs^n \in R \tab \forall\ n > 0$$


??? proposition "Proposition 8.8"
    ### Every factorial ring is normal <a id="p88"></a>

    ??? proof
        $\begin{align*}
            \text{Let } & \frac{a}{b} \in \Quot(R) \text{ be integral over } R \text{ s.t.} \\
            & a, b \in R \text{ are coprime} \\
        \end{align*}$

        $\begin{align*}
            \implies & \frac{a^n}{b^n} + a_1 \frac{a^{n-1}}{b^{n-1}} + \cdots + a_n = 0 \\
            & a^n + a_1 b a^{n-1} + \cdots + a_n b^n = 0 \\
            \implies & b \mid a^n \\
            \implies & b \mid a \\
            \implies &b \text{ is a unit in } R \\
            \implies & \frac{a}{b} \in R
        \end{align*}$

        So $R$ is integrally closed in $\Quot(R)$, and thus normal.


??? example "Example 8.9"
    === "1"
        [P.8.8](#p88) $\implies \Z$ and $K[\underline x]$ are normal.

    === "2"
        $R:=\Z[\sqrt{5}]$ is not normal, as $\tilde R = \Z[\frac{1+\sqrt 5}{2}]$.

        ??? proof
            Let $a + b \sqrt 5 \in \Q[\sqrt 5] = \Quot(\tilde R)$ be integral over $\tilde R$.

            $$
            \begin{align*}
                \implieshref{#t84}{T.8.4} & \tilde R \text{ is integral over } \Z \\
                \implieshref{#c86}{C.8.6} & a+ b \sqrt 5 \text{ is integral over } \Z \\
                \\implies 2a \text{ and } a^2-5b^2 \text{ are integral over } \Z \\
                \implies & 2a, a^2-5b^2 \in \Z, \tab \text{ as } \Z \text{ is normal} \\
                \implies & a + b \sqrt 5 \in \tilde R
            \end{align*}
            $$


??? proposition "Proposition 8.10"
    ### Normal rings and localization <a id="p810"></a>

    Let $R$ be an integral domain.

    Then, the following are equivalent:

    **(a)** $R$ is normal.

    **(b)** $U^{-1}R$ is normal $\forall\ 0\notin U \subseteq R$ multiplicative.

    **(c)** $R_\m$ is normal $\forall\ \m \in \Specmax{R}$.

    ??? proof
        === "(a) $\implies$ (b)"
            Let $K:=\Quot(R)$.

            $$ \implies U^{-1}R \subseteq K \land \Quot(U^{-1}R) = K $$

            Let $a \in K$ be integral over $U^{-1}R$.

            $$
            \begin{align*}
                \implies & \exists\ u \in U, a_1, \dots, a_n \in R \text{ s.t.} \\
                & a^n + \frac{a_1}{u} a^{n-1} + \cdots + \frac{a_n}{u} = 0 \\
                \implies & u^n a^n + a_1 u^{n-1} a^{n-1} + \cdots + a_n u^{n-1} = 0 \\
                & \text{is an integral equation for } ua \text{ over } R \\
                \implies & ua \in R, \tab \text{ as } R \text{ is normal} \\
                \implies & a \in U^{-1}R \\
                \implies & U^{-1}R \text{ is normal}
            \end{align*}
            $$

        === "(b) $\implies$ (c)"
            Trivial.

        === "(c) $\implies$ (a)"
            $\begin{align*}
                \text{Let } & a \in K \text{ be integral over } R \\
                & I:= \{b \in R \mid ba \in R\} \subseteq R
            \end{align*}$

            $$
            \begin{align*}
                \implies& a \text{ is integral over } R_\m & \forall\ \m \in \Specmax{R} \\
                \implies & a \in R_\m \\
                \implies &\exists\ b \in I\setminus \m \\
                \implies &I=R \\
                \implies & a \in R
            \end{align*}
            $$


??? lemma "Lemma 8.11"
    ### Almost integral elements <a id="l811"></a>

    Let $R$ be an integral domain.

    **(a)**

    Let $s \in \Quot(R)$ be integral over $R$.

    $$ \implies s \text{ is almost integral over } R $$

    **(b)**

    $\begin{align*}
        \text{Let } & R \text{ be Noetherial as well} \\
        & s \in \Quot(R) \text{ be almost integral over } R
    \end{align*}$

    $$ \implies s \text{ is integral over } R $$

    ??? proof
        === "(a)"
            $$
            \begin{align*}
                s \text{ is integral over } R
                \iffhref{#l83}{L.8.3} & R[s] \text{ is finitely generated as an } R \text{-module} \\
                \implies & \exists\ 0 \neq c \in R : cf \in R \tab \forall\ f \in R[s] \\
                \implies & c s^n \in R \tab \forall\ n > 0
            \end{align*}
            $$

        === "(b)"
            Let $s \in \Quot(R)$ be almost integral over $R$.

            $$
            \begin{align*}
                \implies& \exists\ 0 \neq c \in R : cs^n \in R \tab \forall\ n > 0 \\
                \implies& R[s] \subseteq c^{-1}R \subseteq \Quot(R), \tab c^{-1}R \text{ f.g. } R \text{-module by } c^{-1} \\
                \implieshref{../../algebra–geometry_lexicon/noetherian_and_artinian_rings/7noether_rings_modules/#t210}{T.2.10} &
                R[s] \text{ is Noetherian anf f.g. as an } R \text{-module} \\
                \iffhref{#l83}{L.8.3}& s \text{ is integral over } R
            \end{align*}
            $$

## 8.2 Lying over an going up

??? theorem "Theorem 8.12"
    ### Lying over and going up <a id="t812"></a>

    $\begin{align*}
        \text{Let } & R \subseteq S \text{ be an integral extension} \\
        & P \in \Spec R \\
        & I \ideal S \text{ s.t. } R \cap I \subseteq P \\
        & \M := \{Q \in \Spec S \mid R \cap Q = P \land I \subseteq Q \}
    \end{align*}$

    Then, the following holds:

    **(a)** $\M \neq \emptyset$

    **(b)** $\not\exists\ Q, Q' \in \M : Q \subsetneq Q'$

    **(c)** $S$ is f.g. as an $R$-alggebra $\implies \M$ is finite

    ??? proof
        ??? proof "Claim: We can assume $I=\{0\}$"
            $\begin{align*}
                \text{Let } & S':=S/I \\
                & R':=R/(R\cap I) \\
                &P':= P/(R \cap I)
            \end{align*}$

            Then, by
            [L.1.22](../../algebra–geometry_lexicon/hilberts_nullstellensatz/5coordinate_rings/#l122),
            there exists an inclusion-preserving bijection

            $$\M \to \{Q' \in \Spec{S'} \mid R' \cap Q' = P'\}$$

            Thus, we can assume $I=\{0\}$ and replace all objects by their primed versions.

        By [P.7.12](../principal_ideal_thm/#p712), there exists an inclusion-preserving bijection
        
        $$\M \to \Spec{S_{[P]}}$$

        Thus, it remains to show that

        **(a)** $S_{[P]} \neq \{0\}$ </br>
        **(b)** $\dim(S_{[P]})=0$ </br>
        **(c)** $|\Spec{S_{[P]}}| < \infty$

        === "(a)"
            Assume the converse.

            $\begin{align*}
                \text{Let } & U:=\{u + (P)_S \mid u \in R\setminus P\} \\
                & S_{[P]}:= U^{-1} (S/(P)_S)
            \end{align*}$

            As $S\neq \{0\}$, we have that $S_{[P]} = \{0\} \implies 0 \in U$

            $$
            \begin{align*}
                S_{[P]} = \{0\} \implies & 0 \in U \\
                \implies & \exists\ u \in R\setminus P : u \in (P)_S \\
                \implies & 1 \in (P_P)_{S_P} \\
                \implies & \exists\ s_i \in S_P, a_i \in P_P : 1 = \sum_{i=1}^{n} s_i a_i
            \end{align*}
            $$

            Let $\tilde S:= R_P[s_1, \dots, s_n] \subseteq S_P$ be an integral extension.

            $$
            \begin{align*}
                \implies& (P_P)_{\tilde S} = \tilde S \iff P_P \tilde S = \tilde S \\
                \implieshref{#t84}{T.8.4} &
                \tilde S \text{ is f.g. as an } R_P \text{-module} \\
                \implieshref{../principaø_idel_thm/#t73}{T.7.3} &
                \tilde S = \{0\} \\
                \implies& R_P = \{0\} \tab \contradiction \\
                \implies& S_{[P]} \neq \{0\}
            \end{align*}
            $$
        
        === "(b)"
            There exists a homomorphism
    
            $$
            \begin{align*}
                K:=\Quot(R/P) &\to S_{[P]} \\
                \frac{a+P}{b+P} &\mapsto \frac{a+(P)_S}{b+(P)_S}
            \end{align*}
            $$

            so $S_{[P]}$ is a $K$-algebra.

            $\begin{align*}
                &S \text{ is integral over } R \\
                &\implies S_{[P]} \text{ is algebraic over } K \\
                &\text{Let } Q\in \Spec{S_{[P]}} \\
                &\implies S_{[P]}/Q \text{ is algebraic over } K \\
                & \implieshref{../../algebra–geometry_lexicon/hilberts_nullstellensatz/2lemma1.1/}{L.1.1(a)}
                S_{[P]}/Q \text{ is a field} \\
                &\implies \Spec{S_{[P]}} = \Specmax{S_{[P]}} \\
                &\implies \dim(S_{[P]}) = 0
            \end{align*}$

        === "(c)"
            $S$ is f.g. as an $R$-algebra

            $$
            \begin{align*}
                \implies& S_{[P]} \text{ is an affine } K \text{-algebra} \\
                \implieshref{../krull_dim_trans_deg/#t411}{T.4.11}&
                | \Specmax{S_{[P]}} < \infty \\
                \implieshref{../../algebra–geometry_lexicon/noetherian_and_artinian_rings/6noetherian_and_artinian_properties/}{T.2.8} &
                |\Spec{S_{[P]}}| < \infty
            \end{align*}
            $$


??? corollary "Corollary 8.13"
    <a id="c813"></a>
    
    Let $R \subseteq S$ be an integral extension.

    $$ \implies \dim(R) = \dim(S)$$

    ??? proof
        === "$\le$"
            $\begin{align*}
                \text{Let } & P_0 \subsetneq \dots \subsetneq P_n \in \Spec R\ \\
                & \M_{P_i} := \{Q \in \Spec S \mid R \cap Q = P_i\}
            \end{align*}$

            $$
            \begin{align*}
                &\implies \exists\ Q_i \M_{P_i} : Q_0 \subsetneq \dots \subsetneq Q_n \\
                &\implies \dim(R) \le \dim(S)
            \end{align*}
            $$

        === "$\ge$"
            Let $Q_0 \subsetneq \dots \subsetneq Q_n \subseteq Q \in \Spec S$

            $$
            \begin{align*}
                &\implies P_i:=Q_i \cap R \in \Spec R \\
                &\implies \dim(R) \ge \dim(S)
            \end{align*}
            $$


## 8.3 Noether Normalization

??? theorem "Theorem 8.14"
    ### Noether Normalization <a id="t814"></a>

    Let $A \neq \{0\}$ be an affine $K$-algebra.

    $$
    \begin{align*}
        \implies \exists\ &c_1, \dots, c_n \in A \text{ algebraically independent over } K \text{ s.t.} \\
        & A \text{ is integral over } C:=K[c_1, \dots, c_n]
    \end{align*}
    $$

    Moreover, $n=\dim(A)$.

    ??? proof
        We have that $A = K[a_1, \dots, a_m] \cong K[x_1, \dots, x_m]/I$.

        With $m=0$, we are done. With $I=\{0\} \iff a_1, \dots a_m$ algebraically independent, we may choose $c_i:=x_i + I$.

        Now, assume $I\neq \{0\}$ and let $f\in I\setminus \{0\}$.

        $$\implies f = \sum_{(i_1, \dots, i_m)\in S} a_{i_1, \dots, i_m} x_1^{i_1} \cdots x_m^{i_m}, \quad S \subseteq \N_0^m \quad \alpha \in K\setminus \{0\}$$

        For $d > \deg(f)$, define the injective function

        $$
        \begin{align*}
            s: S &\to N_0 \\
            (i_1, \dots, i_m) &\mapsto \sum_{j=1}^{m} i_j d^{j-1}
        \end{align*}
        $$

        Then, set $y_i:= x_i-x_1^{d^{i-1}}$ for $i\ge 2$.

        $$
        \begin{align*}
            \implies f &= f(x_1, y_2 + x_1^d, \dots, y_m + x_1^{d^{m-1}}) \\
            &= \sum_{(i_1, \dots, i_m)\in S} a_{i_1, \dots, i_m} \left(x_1^{s(i_1, \dots, i_m)} + g_{i_1, \dots, i_m}(x_1, y_2, \dots, y_m)\right)
        \end{align*}
        $$

        with $\deg_{x_1}(g_{i_1, \dots, i_m}) < s(i_1, \dots, i_m)$.

        As $s$ is injective, $\exists!\ (j_1, \dots, j_m) \in S$ s.t. $k:=s(j_1, \dots, j_m)$ is maximal.

        $\begin{align*}
            A \neq \{0\} &\implies f \notin K \\
            &\implies k > 0
        \end{align*}$

        $\begin{align*}
            \implies& f = \alpha_{j_1, \dots, j_m} x_1^k + h(x_1, y_2, \dots, y_m), & \deg_{x_1}(h) < k \\
            \implies& x_1^k + \alpha_{j_1, \dots, j_m}^{-1} h(x_1, y_2, \dots, y_m) \in I
        \end{align*}$

        Let $B:=K[y_1 + I, \dots, y_m + I] \subseteq A$

        $\begin{align*}
            \implies& A=B[x_1 + I] \\
            \implieshref{#t84}{T.8.4}& A \text{ is integral over } B \\
            \overset{\text{ind}}{\implies}& \exists\ c_1, \dots, c_n \in B \text{ algebraically independent over } K[\underline c] \text{ s.t.} \\
            &\quad B \text{ is integral over } K[\underline c] \\
            \implieshref{#c86}{C.8.6}& A \text{ is integral over } K[\underline c] \\
            \implieshref{#c813}{C.8.13}& \dim(A) = \dim(K[\underline c]) \\
            \implieshref{../krull_dim_trans_deg/#c47}{C.4.7}& \dim(A) = \dim(K[x_1, \dots, x_n])  = n
        \end{align*}$


??? remark "Remark 8.15"
    $\begin{align*}
        \text{Let } & K \text{ be an infinite field} \\
        & A=K[a_1, \dots, a_m] \text{ be an affine } K \text{-algebra} \\
        &\{c_i\}_{i=1}^{n} \text{ satisfying } \href{#t814}{\text{T.8.14}}
    \end{align*}$

    $$
    \begin{align*}
        \implies \exists\ &\gamma_{ij} \in K \text{ s.t.} \\
        & c_i = a_i + \sum_{j=n+1}^{m} \gamma_{ij} a_j
    \end{align*}
    $$


??? example "Example 8.16"
    $\begin{align*}
        \text{Let } & X=\V_{K^2}(x_1x_2-1) \\
        & K[X] = K[x_1, x_2]/(x_1x_2-1) = K[\overline{x_1}, \overline{x_2}] \\
        &c:=\overline{x_1} - \overline{x_2}
    \end{align*}$

    $$
    \begin{align*}
        &\implies 0 = \overline{x_1} \overline{x_2} - 1 = \overline{x_1}^2 - c \overline{x_1} - 1 \\
        &\implies K[X] \text{ is integral over } K[c]
    \end{align*}
    $$

    So the inclusion $K[c] \to K[X]$ induces the surjective morphism

    $$
    \begin{align*}
        F : X &\to K^1 \\
        (\xi_1, \xi_2) &\mapsto \xi_1 - \xi_2
    \end{align*}
    $$