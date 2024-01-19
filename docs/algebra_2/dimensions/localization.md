# Localization

??? definition "Definition: 5.1"

    $\begin{align*}
        \text{Let } & M \text{ be an } R \text{-module} \\
        & U \subseteq M \text{ be a submonoid of } (R, \cdot) \\
    \end{align*}$

    $U$ is called **multiplicative subset**.

    Define a relation on $U \times M$ by

    $$(u_1, m_1) \sim (u_2, m_1) \iff \exists\ u\in U : u u_2 m_1 = u u_1 m_2$$
    
    ??? proof "Claim: This is an equivalence relation"

    ??? notation
        $$[(u, m)]_\sim =: \frac{m}{u}$$

    ## Localization

    $U^{-1}M:=\{\frac{m}{u} | m\in M, u\in U\}$ is the **localization** of $M$
    with respect to $U$.

    $U^{-1} M$ becomes an $R$-module with operations
    
    $$
    \begin{align*}
        \frac{m_1}{u_1} + \frac{m_2}{u_2} &:= \frac{u_2 m_1 + u_1 m_2}{u_1 u_2} \\
        r \frac{m}{u} &:= \frac{r m}{u}
    \end{align*}
    $$

    ### Special case:
    
    $\begin{align*}
        \text{Let } & P\in\Spec R \\
        & U:=R\setminus P \\
    \end{align*}$

    Then, $M_P:=U^{-1}M$ is called the localizer **at** $P$.

    ### Canonical map
    We have a map

    $$
    \begin{align*}
        \varepsilon : M &\to U^{-1}M \\
        m &\mapsto \frac{m}{1}
    \end{align*}
    $$

    which is a homomorphism of $R$-modules. Moreover,
    $\Ker (\varepsilon) = \{m \in M | \exists\ u\in U : u m = 0\}$.
        
        
??? example "Example 5.2"
    === "1"
        Let $R$ be an integral domain, $U:=R\setminus\{0\}$.
        Then, $U^{-1}R:=\Quot(R)=R_{\{0\}}$ is the localization of $R$ at $\{0\}$.

    === "2"
        Let $U:=\{u \in R | u \text{ is not a zero-divisor} \}$

        Then, $U^{-1}R$ is called the **total ring of fractions** of $R$.

        Moreover, $ \varepsilon$ is injective. This is the largest set such that $\varepsilon$ is injective.

    === "3"
        $\begin{align*}
            \text{Let } & R=\Z \\
            & P=(2)\in\Spec R
        \end{align*}$

        $$ \implies R_P = \Z_{(2)} = \text{ the ring of rational numbers with odd denominators}$$

    === "4"
        $\begin{align*}
            \text{Let } & R:=\Z/(6) \\
            & P=(2)\in\Spec R \\
            & U:=R\setminus P
        \end{align*}$

        Then, we have $\frac{\overline 2}{\overline 1} = \frac{\overline 0}{\overline 1}$, as
        $\overline 3\ \overline 1\ \overline 2 = \overline 3\ \overline 1\ \overline 0$.

        We obtain $R_P \cong \mathbb F_2$

    === "5"
        $\begin{align*}
            \text{Let } & X \subseteq X^n \text{ be an affine variety}\\
            & R = K[X] \\
            & x \in X \\
            & \implies m_x \in \Specmax{K[X]}
        \end{align*}$

        Denote $K[X]_x:=K[X]_{m_x}$ the localization **at** $x$.

        Elements are fractions of regular functions such that the denominator does not vanish at $x$.

    === "6"
        $\begin{align*}
            \text{Let } & a \in R \\
            & U:=\{a^i | i\in \N_0\}
        \end{align*}$

        Denote $M_a:=U^{-1}M$

    === "7"
        Assume $0\in U$

        $$ \implies U^{-1} M = \{0\}$$


??? proposition "Proposition 5.3"

    ## Properties of localization <a id="p53"></a>

    === "a)"
        $U^{-1} R$ becomes a ring with operations

        $$ \frac{a_1}{u_1} \frac{a_2}{u_2} = \frac{a_1 a_2}{u_1 u_2}$$

    === "b)"
        $\varepsilon$ is a ring homomorphism.

        $\implies U^{-1} R$ is an $R$-algebra.

    === "c)"
        $U^{-1}M$ is a $U^{-1}R$-module with operations

        $$\frac{a_1}{u_1} \frac{m_1}{u_2} + \frac{a_2}{u_2} \frac{m_2}{u_2} = \frac{a_1 u_2 m_1 + a_2 u_1 m_2}{u_1 u_2^2}$$
    
    === "d)"
        $\varepsilon(U) \subseteq (U^{-1} R)^\times$

        $(\frac{u}{1})^{-1} = \frac{1}{u}$

    === "e)"
        $\begin{align*}
            \text{Let } \phi : & R \to S \text{ be a ring homomorphism s.t.} \\
            & \phi(U) \subseteq S^\times
        \end{align*}$

        $$ \implies \exists! \psi : U^{-1} R \to S \text{ homomorphism of } R \text{-algebras}$$

    === "f)"
        $\begin{align*}
            \text{Let } & R \text{ be an integral domain} \\
            & 0\notin U
        \end{align*}$

        $$ \implies U^{-1} R \text{ can be viewed as a subalgebra of } \Quot(R)$$


    === "g)"
        If $V \subseteq R$ is a multiplicative subset s.t. $U \subseteq V$

        $$\implies V^{-1} U^{-1} M \cong \varepsilon(V)^{-1} U^{-1} M \cong V^{-1} M \text{ are isomorphisms of } R \text{-modules}$$

    === "h)"
        Let $N \subseteq M$ be a submodule

        $$U^{-1} N \subsetsim U^{-1} M \text{ isomorphic to a subset}$$

        The isomorphism is given by

        $$
        \begin{align*}
            U^{-1} N &\to U^{-1} M \\
            \frac{n}{u} &\mapsto \frac{n}{u}
        \end{align*}
        $$

        In particular, given an ideal $I \ideal R$, we have
        
        $$U^{-1} I \ideal U^{-1} R \text{ is an ideal}$$

    === "i)"
        Let $\mathcal{N} \subseteq U^{-1}M$ be a submodule of $U^{-1}R$.

        $$ \implies N:= \varepsilon_M^{-1}(\mathcal{N}) \subseteq M \text{ is a submodule}$$

        Moreover, $U^{-1} N = \mathcal{N}$.

        Then, for $I \ideal U^{-1}R$, we have $I = U^{-1} \varepsilon_M^{-1}(I)$.


??? corollary "Corollary 5.4"

    Let $M$ be a Noetherian $R$-module.

    Then, $U^{-1} M$ is a Noetherian $U^{-1} R$-module.


??? theorem "Theorem 5.5"

    ## The spectrum of a localized ring <a id="t55"></a>

    Let $U \subseteq R$ be a multiplicative subset.

    There there exists an inclusion preserving bijection between

    - $\Spec{U^{-1} R}$
    - $A:=\{P \in \Spec R | P \cap U = \emptyset\}$

    given by

    $$
    \begin{align*}
        Q &\to \varepsilon^{-1}(Q) \\
        P &\to U^{-1} P
    \end{align*}
    $$

    ??? proof
        === "$\Spec{U^{-1} R} \subsetsim A$"
            Let $Q \in \Spec{U^{-1} R}$.

            ??? proof "Claim: $\varepsilon^{-1}(Q) \in \Spec R$"
                Let $a, b \in R$ such that $ab \in \varepsilon^{-1}(Q)$.

                Then, $\frac{a}{1} \frac{b}{1} = \frac{ab}{1} \in Q$.

                $$
                \begin{align*}
                    \implies &\frac{a}{1} \in Q \lor \frac{b}{1} \in Q \\
                    \implies &a \in \varepsilon^{-1}(Q) \lor b \in \varepsilon^{-1}(Q) \\
                    \implies &\varepsilon^{-1}(Q) \in \Spec R
                \end{align*}
                $$

            Let $a\in U$. Then, $\varepsilon(a) \in (U^{-1} R)^\times$ is invertible.
            Thus, if $a \in \varepsilon^{-1}(Q)$, then $Q=U^{-1} R$, which is a contradiction.

            Hence, $\varepsilon^{-1}(Q) \in A$.

        === "$A \subsetsim \Spec{U^{-1} R}$"
            Let $Q \in A$.

            ??? proof "Claim: $\varepsilon^{-1}(U^{-1}Q) = Q$"
                It is trivial that $Q \subseteq \varepsilon^{-1}(U^{-1}Q)$.

                Let $a \in \varepsilon^{-1}(U^{-1}Q)$.

                Then, $\exists\ q\in Q, u\in U$ s.t. $\varepsilon(a) = \frac{q}{u}$.

                $$
                \begin{align*}
                    \implies & \frac{a}{1} = \frac{q}{u} \\
                    \implies & \exists\ v\in U : v u a = v q \in Q \\
                    \implies &a \in Q & \text{ as } vu \notin Q 
                \end{align*}
                $$

            It remains to be shown that $U^{-1} Q \in \Spec{U^{-1} R}$.

            From the previus claim, we have that
        
            $$U^{-1} Q \neq U^{-1} R \tab(*)$$

            $\begin{align*}
                \text{Let } & a_i \in R \\
                & u_i \in U \text{ s.t. } \\
                &\frac{a_1}{u_1} \frac{a_2}{u_2} \in U^{-1} Q
            \end{align*}$

            $$
            \begin{align*}
                \implies& \varepsilon(a_1 a_2) = \frac{a_1}{u_1} \frac{a_2}{u_2} \in U^{-1} Q \\
                \overset{(*)}{\implies}& a_1 a_2 \in Q \\
                \implies &a_i \in Q \\
                \implies &\frac{a_i}{u_i} \in U^{-1} Q
            \end{align*}
            $$


??? remark
    **Special case:**

    Let $U=R\setminus P$ for $P \in \Spec R$.

    Then, there is a bijection between $A=\{Q \in \Spec R | Q \subseteq P\} \leftrightarrow \Spec{R_P}$


??? corollary "Corollary 5.6"

    ## Dimension of a localized ring <a id="c56"></a>

    $$\dim(U^{-1} R) \le \dim R$$

    ??? proof
        Follows trivially from [T.5.5](#t55).


??? definition "Definition: 5.7"
    ## Local ring

    $R$ is called **local ring** if $R$ has exactly one maximal ideal.


??? corollary "Corollary 5.8"

    Let $P \in \Spec R$.

    Then, $R_P$ is a local ring with maximal ideal $P_P$.


??? example "Example 5.9"
    1. Fields are local rings.
    2. $K[x]/(x^n)$ is a local ring with maximal ideal $(x)/(x^n)$.
    3. $K\llbrace x \rrbrace$ is a local ring with maximal ideal $(x)$.
    4. $R=\{0\}$ is not local.


??? definition "Definition: 5.10"
    ## Height

    === "$P\in \Spec R$"
        The **height** of $P$ is defined as

        $$\ht(P):=\dim(R_P)$$

        This is the maximal length of a chain of prime ideals ending in $P$.

    === "$I\properideal R$"
        
        The **height** of $I$ is defined as

        $$\ht(I):=\min\{\ht(P) | P\in\V_{\Spec R}(I)\}$$


??? remark "Remark 5.11"
    Let $P \in \Spec R$.

    - $\dim(R/P) is the maximal of the lengths of chains of prime ideals in $R$ starting in $P$.
    - $\ht(P)$ is the maxiaml of the lengths of chains of prime ideals in $R$ ending in $P$.

    Thus, $\ht(P) + \dim(R/P) = \dim R$.

    We often have equality (f.e. for affine domains).


??? example "Example 5.12"
    === "1"
        $$P \in\Spec R \text{ minimal} \iff \ht(P) = 0$$

    === "2"
        Let $x=(\xi_1, \dots, \xi_n) \in K^n$.

        This forms a chain

        $$\{0\} \subsetneq (x_1-\xi_1) \subsetneq \dots \subsetneq m_x$$

        implying $\ht(m_x) \geq n$.

        Moreover, $n=\dim(K[\underline x]) \ge \ht(m_x)$.

        $$ \implies \ht(m_x) = n$$

    === "3"
        Let $X=Z_1 \cup Z_2 \subseteq K^n$ be an affine variety, s.t. $\dim Z_1 < \dim Z_2$, and $K=\overline K$.

        Let $x\in Z_1\setminus Z_2$.

        Then, chains of closed irreducibles in $X$ startong with $\{x\}$ lies
        lies entirely in $Z_1$.

        $$
        \begin{align*}
            \implies &\ht(m_x) \text{ is the maximal length of such a chain} \\
            \implies &\ht(m_x) \leq \dim Z_1 \\
        \end{align*}
        $$

        Moreover, $\dim(K[X]/m_x) = 0$.

        $$ \implies\dim(m_x) + \ht(m_x) \le \dim(Z_1) < \dim(X) = \dim(K[X])$$


??? definition "Definition 5.12"
    ## Annihilator

    Let $M$ be an $R$-module.

    1. Let $m\in M$. $\Ann(m):=\{r\in R | r m = 0\}$
    2. $\Ann(M):=\bigcap_{m\in M} \Ann(m)$
    3. $\dim(M):=\dim(R/\Ann(M))$
    4. $\Supp(M):=\{P\in\Spec R | M_P \neq \{0\}\}$