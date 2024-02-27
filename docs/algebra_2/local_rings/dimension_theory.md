# 9 Dimension Theory
## 9.1 The lenght of a module

??? definition "Definition 9.1"
    Let $M$ be an $R$-module.

    $$\length M := \sup\{n \in \N \mid \exists\ \text{chain of submodules } M_0 \subsetneq M_1 \subsetneq \cdots \subsetneq M_n \subseteq M\}$$


??? example "Example 9.2"
    **(1)**

    Let $m=\prod_{i=1}^{n} p_i^{r_i}$ with $p_i \neq p_j \iff i \neq j$ and $r_i > 0$.

    $\implies \length {\Z/m\Z} = n$ 

    **(2)**

    $\length{\Z} = \infty \text{ as a module over itself}$

    **(3)**

    $\begin{align*}
        \text{Let } & R=K \\
        & V \text{ be a vector space over } K
    \end{align*}$

    $\implies \length V = \dim_K(V)$

    **(4)**

    $M$ is simple $\iff \length M = 1$

    $M=\{0\} \iff \length M = 0$


??? theorem "Theorem 9.3"
    ### Basic facts about length <a id="t93"></a>

    === "(a)"
        Let $M_0 \subsetneq M_1 \subsetneq \cdots \subsetneq M_n \subseteq M$ be a maximal chain of submodules.

        $$\implies \length M = n$$

        Moreover, all maximal chains have equal length.

    === "(b)"
        $$\length M \le \infty \iff M \text{ is Artinian and Noetherian}$$

    === "(c)"
        For a submodule $N \subseteq M$:

        $$\length M = \length N + \length{M/N}$$

    ??? proof
        === "(a)"
            Induction on $n$:

            $n=0 \implies M=\{0\}$

            $n>0$:

            Consider the submodule $N \subsetneq M$, and form $N_i:= N \cap M_i$.

            $$\implies \{0\} = N_0 \subseteq N_1 \subseteq \cdots \subseteq N_n = N$$

            Let $C:=\{N_i\}_{i=0}^n$ be a chain of submodules of $N$. We have the homomorphism

            $$
            \begin{align*}
                \phi_i : N_i &\to M_i/M_{i-1} \\
                \eta &\mapsto \eta + M_{i-1}
            \end{align*}
            $$

            $\begin{align*}
                \implies & \ker \phi_i = N_{i-1} \\
                \implies & N_i/N_{i-1} \subsetsim M_i/M_{i-1} \text{ simple} \\
                \implies & N_i = N_{i-1} \lor N_i/N_{i-1} \text{ simple} \\
                \implies & C \text{ is a maximal chain of submodules of } N \\
                \implies & \length C \le n
            \end{align*}$

            ??? proof "Claim: $\length C < n$"
                Assume $\length C = n$. We want to show by induction on $i$ that it implies $M_i=N_i$.
    
                It is tirvially true for $i=0$. For $i>0$, we have by assumption that $N_i/N_{i-1} \neq \{0\}$,
                so the map $\phi_i$ is surjective.
    
                $\begin{align*}
                    \implies & N_i/N_{i-1} \cong M_i/M_{i-1} \\
                    \overset{\text{ind }i}{\implies} & N_i/M_{i-1} \cong M_i/M_{i-1} \\
                    \implies & M_i \subseteq N_i + M_{i-1} \overset{\text{ind }i}{=} N_i + N_{i-1} = N_i \subseteq M_i \\
                    \implies & M_i = N_i \\
                    \implies & M = N \quad \contradiction \\
                    \implies & \length C < n \\
                \end{align*}$
            
            $\begin{align*}
                \overset{\text{ind } n}{\implies} & \length N < n \\
                \implies & \length M \le n \\
                \implies & \length M = n
            \end{align*}$
            
        === "(b)"
            === "$\impliedby$"
                A assume M neither Artinian nor Noetherian.

                $$\implies \length M = \infty$$

            === "$\implies$"
                Assume without loss $M \neq \{0\}$.

                $$
                \begin{align*}
                    \implies & \exists\ M_1 \subsetneq M \text{ with nothing inbetween} \\
                    & \vdots \\
                    \implies & \exists\ M_k = \{0\} \subsetneq M_{k-1} \text{ with nothing inbetween} \\
                    \overset{\text{(a)}}{\implies} & \length M = k < \infty
                \end{align*}
                $$

        === "(c)"
            For $\length N = \infty$ or $\length {M/N} = \infty$, the equality is trivial.

            Assume $\length N < \infty$ and $\length {M/N} < \infty$.

            Then, there exist maximal chains $C_N$ and $C_{M/N}$. Putting these together, we get by (a)

            $$\length M = \length N + \length {M/N}$$


??? lemma "Lemma 9.4"
    Let $(R, \m)$ be a local Noetherian ring.

    $$
    \begin{align*}
        \implies \exists\ & p \in \Q[x] \text{ s.t.} \\
        & \length {R/\m^d} \le p(d) \land \deg p = \dim R
    \end{align*}
    $$

    ??? proof
        By [C.8.9](../dimensions/integral_extensions/#c89), we have

        $$
        \begin{align*}
            \exists\ & a_1, \dots, a_n \in \m \text{ s.t.} \\
            & m = \sqrt{(a_1, \dots, a_n)} \\
        \end{align*}
        $$

        Let $q:=(a_1, \dots, a_n)$.

        $$
        \begin{align*}
            \implies & g \subseteq m \\
            \implies & q^d \subseteq \m^d \\
            \implies & \text{ Obtain } R/q^d \surjectiveto R/\m^d \\
            \implieshref{#t93}{T.9.3(c)} & \length {R/\m^d} \le \length {R/q^d} \quad (*)
        \end{align*}
        $$

        We have a chain

        $$\{0\} = q^d/q^d \subseteq q^{d-1}/q^d \subseteq \cdots \subseteq q/q^d \subseteq R/q^d$$

        with factors $q^i/q^{i+1}$. For every $i$, $q^i$ is generated by monomials of degree $i$ in $a_1, \dots, a_n$.
        By [L.8.19](../dimensions/integral_extensions/#l819),
        there are $k_i:=\binom{i+n}{n} - \binom{i+n-1}{n}$ such monomials. Hence, $q^i/q^{i+1}$ can
        be generated by $k_i$ elements as an $R/q$-module, yielding $(R/q)^{k_i} \surjectiveto q^i/q^{i+1}$. Then,
        by $(*)$ and [T.9.3(c)](#t93), we get

        $$
        \begin{align*}
            \length {R/\m^d} &\le \length {R/q^d} \\
            &= \sum_{i=0}^{d-1} \length {q^i/q^{i+1}} \\
            &\le \length {(R/q)^{k_i}} \\
            &= \sum_{i=0}^{d-1} k_i \length {R/q} \\
            &= \binom{d-1+n}{n} \length {R/q} =: p(d)
        \end{align*}
        $$


## 9.2 The Associated Graded Ring

??? definition "Definition: Graded ring"
    ### Graded ring <a id="d92"></a>
    
    A ring $S$ such that

    $$S = \bigoplus_{d \in \N_0} S_d$$

    with $S_d$ abelian groups and $\forall\ i,j : S_i \cdot S_j \subseteq S_{j+i}$ 
    is called a **graded ring**.

    Elements from $S_d$ are called **homogeneous of degree $d$**.

    !!! example "Example: $R[t]$ with $R[t]_d:=R \cdot t^d$ is a graded ring"

??? definition "Definition: Associated Graded Ring"
    Let $(R, \m)$ be a local ring. Then the ring

    $$\gr R := R^*/(\m)_{R^*}$$

    is called the **associated graded ring** of $R$.

    The graded components are given by

    $$\gr{R}_d := R_d^*/(R_d^* \cdot \m) \cong \m^d/\m^{d+1}$$

    !!! remark "Remark: $\gr R$ is a Noetherian ring"
        As $R$ is Noetherian, $\m=(c_1, \dots, c_n)_R$ is finitely generated as an $R$-module, making

        $$R^* = R[\m t] = R[c_1 t, \dots, c_n t]$$

        a Noetherian ring.

??? definition "Definition: Hilbert-Samuel function of $R$"
    ### Hilbert-Samuel function

    $$h_R(d):= \length {R/\m^{d+1}}$$


??? definition "Definition: Standard graded ring"
    ### Standard graded ring

    A graded ring $A$, with $A_0 = K$ being a field and $A$ being finitely generated by
    elements of $A_1$ as a $K$-algebra, is called a **standard graded ring**.



??? theorem "Theorem 9.5"
    <a id="t95"></a>
    Let $A$ be a standard graded ring.

    $$
    \begin{align*}
        \implies \exists\ & p_A \in \Q[x] \text{ s.t.} \\
        & \dim_K(A_d) = p_A(d) \quad \forall\ d \text{ large enough}
    \end{align*}
    $$

    ??? proof
        Proving a stronger assertion: For a finitely generated $A$-module $M$, $\dim_K(M_d)$ can be given by a
        polynomial for large enough $d$.

        Note, that the generators of $M$ can be chosen honogeneous, so (for some reason) each $M_d$ are
        finite-dimensional $K$-vector spaces.

        We have that $A:=K[a_1, \dots, a_n]$ with $a_i \in A_1$. We use induction on $n$.

        === "$n=0$"
            $$
            \begin{align*}
                \implieshref{../../dimensions/krull_dim_trans_deg/#t411}{T.4.11}
                & \dim_K(A) < \infty \\
                \implies & \dim_K(M) < \infty \text{ as } M \text{ is f.g.}\\
                \implies & \dim_K(M_d) = 0 \quad \forall\ d \text{ large enough}
            \end{align*}
            $$

        === "$n>0$"
            Consider the map

            $$
            \begin{align*}
                \phi : M &\to M \\
                m &\mapsto a_1 m
            \end{align*}
            $$

            Then, $L:=\ker \phi$ and $N:=\Im \phi$ are graded submodules of $M$, and f.g.
            as $A$ is Noetherian.

            Moreover, $N_{d+1} \cong M_d/L_d$ (?), so

            $$\dim_K(N_{d+1}) = \dim_K(M_d) - \dim_K(L_d)$$

            The factor module $Q:=M/N$ is also f.g. and graded and we get the recursion relation

            $$
            \begin{align*}
                \dim_K(M_{d+1}) &= \dim_K(Q_{d+1}) + \dim_K(N_{d+1}) \\
                &= \dim_K(Q_{d+1}) + \dim_K(M_d) - \dim_K(L_d)
            \end{align*}
            $$

            This yields

            $$\dim_K(M_d) = \dim_K(M_0) + \sum_{i=1}^{d} \dim_K(Q_i) - \sum_{i=0}^{d-1} \dim_K(L_i)$$

            $\begin{align*}
                & a_1 \text{ annihilates } L \text{ and } Q \\
                & \!\!\implies N \text{ and } Q \text{ are } A/a_1 \text{-modules. }
                A/a_1 \text{ is a standard graded ring with } n-1 \text{ generators} \\
                & \!\!\overset{\text{ind}}{\implies} \dim_K(M_d) \text{ is given by a polynomial for large enough } d
            \end{align*}$

??? remark
    [T.9.5](#t95) shows that the hilbert polynomial is given by a polynomial in $\Q[x]$ for large $d$.

    $$\exists\ p_R \in \Q[x] : h_R(d) = \length {R/\m^{d+1}} = p_R(d)$$


??? lemma "Lemma 9.6"
    ### Artin-Rees Lemma <a id="l96"></a>
    
    Let $I \ideal R$ be an ideal.

    $$\implies \exists\ r \in \N : I \cap \m^n = \m^{n-r} \cdot (I \cap \m^r) \quad \forall\ n \ge r$$

    ??? proof
        $\begin{align*}
            \text{Let } & R^* := R[\m t] \\
            & J_d:= \sum_{i=0}^{d} R^* (I \cap \m^i) t^i \ideal R^*
        \end{align*}$

        Then, $R^*$ is Noetherian, as it is finitely generated over a noetherian ring.

        $$\implies \exists\ r\ge 0 : J_d = J_r \quad \forall\ d \ge r$$

        Moreover, observe that $(I \cap \m^n) t^n \subseteq R_n^*$ is of degree $n$.

        $$
        \begin{align*}
            \implies (I \cap \m^n) t^n \subseteq R_n^* \cap J_n &= \sum_{i=0}^{r} R_{n-i}^* (I \cap \m^i) t^i \\
            &= \sum_{i=0}^{r} \m^{n-i} (I \cap \m^i) t^n \\
            &= \sum_{i=0}^{r} \m^{n-r} \m^{r-i}(I \cap \m^i) t^n \\
            &\subseteq \m^{n-r} \cdot (I \cap \m^r) t^n
        \end{align*}
        $$

        So we have

        $$\m^{n-r} \cdot (I \cap \m^r) \subseteq I \cap \m^n \subseteq \m^{n-r} \cdot (I \cap \m^r)$$


??? lemma "Lemma 9.7"
    Let $a \in \m$ not be a zero divisor.

    $$\implies \dim(\gr {R/Ra}) < \dim(\gr R)$$

    ??? proof
        $$
        \begin{align*}
            \m \in \Specmax R &\implies \m/Ra \in \Specmax {R/Ra} \\
            &\implies h_{R/Ra}(d) = \length {M_d}, \quad M_d:= (R/Ra)/(\m/Ra)^{d+1} \\
        \end{align*}
        $$

        The natural epimorphism $R \surjectiveto M_d$ has kernel $Ra + m^{d+1}$, so we obtain an epimorphism
        $R/\m^{d+1} \surjectiveto M_d$ with kernel

        $$(Ra + \m^{d+1})/\m^{d+1} \cong Ra/(Ra \cap \m^{d+1})$$

        Then, by [T.9.3(c)](#t93), we get

        $$\length {M_d} = \length {R/\m^{d+1}} - \length {Ra/(Ra \cap \m^{d+1})}$$

        By [L.9.6](#l96), we have

        $$\exists\ r\ge 0 : Ra \cap \m^{d+1} = \m^{d+1-r} \cdot (Ra \cap \m^r) \subseteq m^{d+1-r} a, \quad d>r$$

        which yields an epimorphism $Ra/(Ra \cap \m^{d+1}) \surjectiveto Ra/\m^{d+1-r} a \cong R/\m^{d+1-r}$.
        Thus, we get a lower bound for the length of $Ra/\left(Ra \cap \m^{d+1}\right)$:

        $$
        \begin{align*}
            h_{R/Ra}(d) &= \length {M_d} \\
            &\le \length {R/\m^{d+1}} -  \length {R/\m^{d+1-r}} \\
            &= h_R(d) - h_R(d-r)
        \end{align*}
        $$

        for large enough $d$. Now, using [T.8.22](../../dimensions/integral_extensions/#t822), we get

        $$\dim(\gr R) = \deg h_{R/Ra} < \deg h_R = \dim(\gr R)$$ 


??? theorem "Theorem 9.8"
    ### The dimensions of $R$ and $\gr R$ <a id="t98"></a>

    Let $R$ be a local Noetherian ring.

    $$ \implies \dim(\gr R) = \dim R$$

    ??? proof
        === "$\le$"
            Follows from [T.8.22](../../dimensions/integral_extensions/#t822) and [L.9.4](#l94).

        === "$\ge$"
            ??? proof "Claim: We may assume $R$ to be an integral domain"
                Let $P \in \Spec R$.
    
                We have an epimorphism $R/\m^{d+1} \surjectiveto (R/P)/(\m/P)^{d+1}$.
    
                $$
                \begin{align*}
                    \implies & h_R(d) \ge h_{R/P}(d) \\
                    \implies & \deg (h_R) \ge \deg (h_{R/P}) \\
                    \implies & \dim(R/P) \ge \dim(\gr {R/P})
                \end{align*}
                $$

                so we may assume $R$ to be an integral domain.

            Induction on $\dim (\gr R) =: n$:

            === "$n=0$"
                $$
                \begin{align*}
                    \implieshref{../../algebra–geometry_lexicon/noetherian_and_artinian_rings/7noether_rings_modules/#t411}{T.4.11}
                    & \dim_K(\gr R) < \infty \\
                    \implies & \gr{R}_d = \{0\} \quad \forall\ d \text{ large enough} \\
                    \implies & \m^d / \m^{d+1} = \{0\} \\
                    \implies & \m^d = \m \cdot \m^d \\
                    \implieshref{../../dimensions/principal_ideal_thm/#nakajama-lemma}{N.L.}
                    & \m^d = \{0\} \\
                    \implies & \m = \{0\} \\
                    \implies & R \text{ is a field} \\
                    \implies & \dim R = 0
                \end{align*}
                $$

            === "$n>0$"
                Let $P_0 \subsetneq P_1 \subsetneq \cdots \subsetneq P_k \in \Spec R$ be a chain.

                $\begin{align*}
                    \implies & \exists\ a \in P_1 \setminus \{0\} \\
                    \implieshref{#l97}{L.9.7} &\dim(\gr{R/Ra}) < \dim(\gr R) \\
                    \overset{\text{ind}}{\implies} & \dim(R/Ra) \ge \dim(\gr{R/Ra}) \\
                    \implies & \dim(\gr R) > k-1 \\
                    \implies & \dim(\gr R) \ge k
                \end{align*}$


??? theorem "Theorem 9.9"
    ### Krull's Intersection Theorem <a id="t99"></a>

    $$ \bigcap_{d\in\N_0} \m^d = \{0\}$$ 

    ??? proof
        $\begin{align*}
            &\text{Let } I:=\bigcap_{d\in\N_0} m^d \\
            &\implieshref{#l96}{A.R.} \exists\ r : I \cap \m^n = \m^{n-r} \cdot (I \cap \m^r) \quad \forall\ n \ge r \\
            &\implies\! I = \m I \\
            &\implieshref{../../dimensions/principal_ideal_thm/#nakajama-lemma}{N.L.}
            I = \{0\}
        \end{align*}$


??? definition "Definition: Order"
    Let $a \in R$. Then there exists $d\in \N_0$ s.t. $a \in \m^d \setminus \m^{d+1}$. We call this
    number the **order** of $a$:

    $$\ord(a) := d$$

    From the isomorphism $\gr{R}_d \cong \m^d/\m^{d+1}$, we can define

    $$
    \begin{align*}
        \gr a &:= a + \m^{d+1} \in \gr{R}_d \setminus \{0\} \\
        \gr 0 &:= 0
    \end{align*}
    $$

    ???+ remark
        For $a, b \in R$ with nonzero orders $\ord(a) = d$ and $\ord(b) = e$, we have

        $$\gr{ab} = \gr a \gr b = ab + \m^{d+e+1} \in \gr{R}_{d+e}$$

        If one of $a$ or $b$ has order $0$, then $\gr{ab} = 0$, and the above equality does not hold.


??? theorem "Theorem 9.10"
    ### Properties passing from gr(R) to R <a id="t910"></a>
    
    **(a)** $\gr R$ is an integral domain $\implies R$ is an integral domain.

    **(b)** $\gr R$ is a normal domain $\implies R$ is a normal domain.

    ??? proof
        === "(a)"
            Let $a, b \in R$ with order $d$ and $e$.

            $\begin{align*}
                & \overset{\text{hyp}}{\implies} \gr{a} \gr{b} \neq 0 \\
                & \implies ab \notin \m^{d+e+1} \\
                & \implies ab \neq 0
            \end{align*}$

        === "(b)"
            From **(a)**, we know that $R$ is an integral domain, and thus, we can define the field of fractions.

            Let $\frac{a}{b} \in \Quot(R)$ be integral over $R$. R.T.P: $a \in (b)_R$.

            ??? proof "Claim: $\forall\ n\in\N_0 : a \in m^n + (b)_R$"
                Using induction on $n$. For $n=0$, this is trivial.

                Let $n>0$. By induction, we have that $a \in \m^{n-1} + (b)_R$, so we can write
                $a = \tilde a + rb$ with $\tilde a \in \m^{n-1}$ and $r \in R$.

                $\begin{align*}
                    \implies& \frac{\tilde a}{b} = \frac{a}{b} - r \in \Quot(R) \text{ is integral} \\
                    \implieshref{../../dimensions/integral_extensions/#l8.11}{L.8.11}&
                    \frac{\tilde a}{b} \text{ is almost integral} \\
                    \implies& c \tilde a^l = r_l b^l \\
                    \implies& \gr c \gr{\tilde a}^l = \gr{r_l} \gr b^l \\
                    \implies& \frac{\gr {\tilde a}}{\gr b} \in \Quot(\gr R) \text{ is almost integral} \\
                    \implieshref{../../dimensions/integral_extensions/#l8.11}{L.8.11}&
                    \frac{\gr {\tilde a}}{\gr b} \text{ is integral} \\
                    \overset{\text{hyp}}{\implies} &
                    \frac{\gr {\tilde a}}{\gr b} \in \gr R \\
                    \implies& \gr {\tilde a} = g \cdot \gr b, \quad g \in \gr R \\
                    \implies& g \in \gr{R}_{n-1-\ord(b)} \\
                    \implies& g \in \m^{n-1-\ord(b)} \setminus \m^{n-\ord(b)} \\
                \end{align*}$

                So we can write $g = s + \m^{n-\ord(b)}$ with $s \in \m^{n-1-\ord(b)}$.

                $\begin{align*}
                    \implies& \gr a = \gr s \gr b \\
                    \implies& \tilde a + \m^n = sb + \m^n \\
                    \implies& a = (\tilde a - sb) + (r + s) b \in \m^n + (b)_R
                \end{align*}$

            Let $\overline R:= R/(b)$

            $b \notin \m \implies b \in R^\times \implies a \in (b)$

            Assume $b \in \m$.

            $\begin{align*}
                \overset{\text{claim}}{\implies}& \overline a \in \overline \m^n, \quad \forall\ n\in\N \\
                \implieshref{#t9.9}{T.9.9}& \overline a = 0 \\
                \implies& a \in (b)_R
            \end{align*}$