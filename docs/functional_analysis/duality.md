# 10 Duality

??? definition "Definition 10.1"
    Let $(X, \| \cdot \|_X)$ and $(Y, \| \cdot \|_Y)$ be Banach spaces.

    === "Isomorphic"
        $X \cong Y$ if $\exists$ continuous isomorphism $T: X \to Y$.

    === "Isometric"
        $X$ and $Y$ are isomorphic and $\|x\|_X = \|Tx\|_Y \quad \forall\ x \in X$.


??? theorem "Theorem 10.1"
    ## Dual space of a Hilbert space <a id="t101"></a>

    Let $X$ be a Hilbert space.

    $$
    \begin{align*}
        \implies
        \begin{cases}
            X \cong X^* \\
            \begin{matrix}
                T: &\!\!\!\!\!\!X \to X^* \\
                &y  \mapsto \langle \cdot, y \rangle
            \end{matrix}
        \text{ is an isometric isomorphism}
        \end{cases}
    \end{align*}
    $$

    ??? proof
        === "Surjective"
            Follows from Riesz representation theorem [T.9.1](../duality_in_hilbert_space/#t91).

        === "Injective"
            Assume $Ty = \inner{\cdot}{y} = 0_{X^*}$.

            $$
            \begin{align*}
                \iff& \inner{x}{y} = 0 \quad \forall\ x \in X \\
                \implies& \inner{y}{y} = 0 \\
                \implies& y = 0
            \end{align*}
            $$

        === "Continuous"
            This is clear.

        === "Isometric"
            $$
            \begin{align*}
                \|Ty\|_{X^*} &= \sup_{0 \neq x \in X} \frac{|\inner{x}{y}|}{\|x\|_X} \\
                &= \sup_{\|x\|_X = 1} |\inner{x}{y}| \\
                &= \left|\inner{\frac{\pm y}{\|y\|_X}}{y}\right| \\
                &= \|y\|_X
            \end{align*}
            $$


??? theorem "Theorem 10.2"
    ## Duals of $\ell^p$ and $L^p$ spaces <a id="t102"></a>

    $\begin{align*}
        \text{Let } & 1 \le p < \infty  \\
        & 1 \le q \le \infty \\
        & \quad\quad \text{s.t. } \frac{1}{p} + \frac{1}{q} = 1 \\
        & \Omega \text{ measurable}
    \end{align*}$

    === "(a)"
        $$(\ell^p)^* \cong \ell^q$$
    
        The map $T: \ell^q \to (\ell^p)^*$ defined by
    
        $$(Ty)(x) := \sum_{j=1}^\infty y_j \overline x_j, \quad y \in \ell^q, x \in \ell^p$$
    
        is an isometric isomorphism.


    === "(b)"
        $$(L^p(\Omega))^* \cong L^q(\Omega)$$
    
        The map $T: L^q(\Omega) \to (L^p(\Omega))^*$ defined by
    
        $$(Tg)(f) := \int_\Omega g(x) \overline{f(x)} dx, \quad g \in L^q(\Omega), f \in L^p(\Omega)$$
    
        is an isometric isomorphism.
    
    ??? proof
        === "(a)"
            Proof for $\K = \R$.
            === "Well-defined"
                We need to show that $\forall y\in \ell^q : Ty \in (\ell^p)^*$:

                $\begin{align*}
                    \text{Let } & x \in \ell^p \\
                    & y \in \ell^q
                \end{align*}$

                By the [Hölder inequality](https://en.wikipedia.org/wiki/H%C3%B6lder%27s_inequality#Counting_measure), we have

                $$|(Ty)(x)| = \left|\sum_{j=1}^{\infty} x_j y_j \right| \le \|x\|_p \|y\|_q$$

                Thus, yielding

                $$\|Ty\|_{(\ell^p)^*} \le \|y\|_q < \infty$$

                so, $Ty \in (\ell^p)^*$.

            === "Injective"
                $$
                \begin{align*}
                    Ty = 0 & \iff (Ty)(x) = 0 \quad \forall\ x \in \ell^p \\
                    & \iff \sum_{j=1}^{\infty} x_j y_j = 0 \quad \forall\ x \in \ell^p \\
                    & \implies \sum_{j=1}^{\infty} \delta_{j,k} y_j = 0 \quad \forall\ k \in \N \\
                    & \implies y = 0
                \end{align*}
                $$

            === "Surjective"
                $\begin{align*}
                    \text{Let } & L \in (\ell^p)^* \\
                    & y_n := L(e_n) \\
                    & y := (y_1, y_2, \dots)
                \end{align*}$

                ??? proof "Claim: $y \in \ell^q$"
                    $\text{Let } \tilde y_n := \begin{cases}
                        |y_n|^{1-1} \cdot \sgn(y_n) & y_n \neq 0 \\
                        0 & \text{else}
                    \end{cases}$

                    Then, we have that

                    $$
                    \begin{align*}
                        (1) && \sum_{n=1}^{N} |\tilde y_n|^p &= \sum_{n=1}^{N} |y_n|^{p(q-1)} = \sum_{n=1}^{N} |y_n|^q \\
                        (2) &&& \sum_{n=1}^{N} |\tilde y_n|^q = \sum_{n=1}^{N} \tilde y_n y_n = \sum_{n=1}^{N} \tilde y_n L(e_n) \\
                        &&& = L\left(\sum_{n=1}^{N} \tilde y_n e_n\right) = L\Big((\tilde y_1, \dots, \tilde y_N)\Big) \\
                        &&& \le \|L\|_{(\ell^p)^*} \cdot \|(y_1, \dots, y_N)\|_p \\
                        &&& \overset{(1)}{=} \|L\|_{(\ell^p)^*} \cdot \left(\sum_{n=1}^{N} |y_n|^q\right)^{1/p}
                    \end{align*}
                    $$

                    Then we get an upper bound, and let $N\to\infty$, yielding

                    $$\|y\|_q = \left(\sum_{n=1}^\infty |y_n|^q\right)^{1-1/p} \le \|L\|_{(\ell^p)^*} < \infty$$

                    so $y \in \ell^q$.

                Thus, $L = Ty$ on $\overline{d}^{\|\cdot\|_p}$.

                For $1 \le p < \infty$, we have that $d$ is dense in $\ell^p$. Moreover, $Ty$ and $L$
                are continuous on $\ell^p$, so $L = Ty$ on $\ell^p$.

            === "Isometric"
                Follows from some of the claculations in the proof of well-definedness and surjectivity.

        === "(b)"
            === "$\supsetsim$"
                $\begin{align*}
                    \text{Let } & f \in L^p \\
                    & g \in L^q
                \end{align*}$

                Define $L_g: L^p \to \K$ by

                $$L_g(f) := \int_\Omega f \overline g$$

                Then, by the Hölder inequality, we have

                $$\left|\int_\Omega f g \right| \le \|f\|_p \|g\|_q$$

                Thus $(L^p)^* \supsetsim L^q$.

            === "$\subsetsim$"
                Let $L \in (L^p)^*$ and define
                
                $$
                \begin{align*}
                    I : L^p & \to \R \\
                    f & \mapsto \frac{1}{p} \|f\|_p^p - L(f)
                \end{align*}
                $$

                ??? proof "Claim: $\exists \text{ minimizer of } I$"
                    $\begin{align*}
                        \text{Let } & \{f_j\} \subseteq L^p \text{ be a minimizing sequence of } I \\
                        & d := \lim_{j\to\infty} I(f_j) \\
                    \end{align*}$

                    $$
                    \begin{align*}
                        \implies d & \gets \frac{1}{2} (I(f_j) + I(f_k)) \\
                        & = \frac{1}{2} \left(\frac{1}{p} \|f_j\|_p^p + \frac{1}{p} \|f_k\|_p^p\right) - L\left(\frac{f_j + f_k}{2}\right) \\
                        & \!\oversethref{#l101}{L.10.1}{\le}
                        \frac{1}{p} \left\|\frac{f_j + f_k}{2}\right\|_p^p
                        - L\left(\frac{f_j + f_k}{2}\right)
                        + \frac{1}{p} \left\|\frac{f_j - f_k}{2}\right\|_p^p \\
                        & \ge d + \frac{1}{p} \left\|\frac{f_j - f_k}{2}\right\|_p^p
                    \end{align*}
                    $$

                    Thus, $\{f_j\}$ is a Cauchy sequence in $L^p$, which is complete, so the limit exists.
            
                Let $f \in L^p$ be a minimizer of $I$.

                ??? proof "Claim: $L(\phi) = \int_\Omega \phi |f|^{p-1} \sgn(f)$"
                    Then, we have that

                    $$I(f + \varepsilon \phi) \ge I(f) \quad \forall\ \varepsilon \in \R, \phi \in L^p$$

                    Then, we have that

                    $$
                    \begin{align*}
                        0 = \left.\frac{d}{d\varepsilon} \right|_{\varepsilon=0} I(f + \varepsilon \phi)
                        &= \left.\frac{d}{d\varepsilon} \right|_{\varepsilon=0}
                        \left(\int_\Omega \frac{1}{p} |f + \varepsilon \phi|^p d\mu - L(f + \varepsilon \phi)\right) \\
                        &= \left.\int_\Omega |f+ \varepsilon\phi|^{p-1} \sgn(f) \phi d\mu - L(\phi)\right|_{\varepsilon=0} \\
                        &= \int_\Omega |f|^{p-1} \sgn(f) \phi d\mu - L(\phi)
                    \end{align*}
                    $$

                $$\int_\Omega |g|^q = \int_\Omega |f|^{(p-1)q} = \int_\Omega |f|^{p} < \infty$$

                Thus, $g \in L^q$.


??? lemma "Lemma 10.1"
    ## Clarkson's inequality <a id="l101"></a>

    $$
    \begin{align*}
        (a) && 2 \le p < \infty & \implies \|\frac{f+g}{2}\|_p^p + \|\frac{f-g}{2}\|_p^p \le \frac{1}{2}(\|f\|_p^p + \|g\|_p^p) \\
        \\
        (b) && \begin{rcases}
            & 1 < p < 2 \\
            & \frac{1}{p} + \frac{1}{q} = 1
        \end{rcases}
        & \implies \|\frac{f+g}{2}\|_p^q + \|\frac{f-g}{2}\|_p^q \le \left(\frac{\|f\|_p^p + \|g\|_p^p}{2}\right)^{q-1}
    \end{align*}
    $$


??? theorem "Theorem 10.3"
    ## Hahn-Banach theorem <a id="t103"></a>

    $\begin{align*}
        \text{Let } & X \text{ be a real or complex vector space} \\
        & U \subseteq X \text{ be a subspace} \\
        & p: X \to \R \text{ be a sublinear functional} \\
        & \ell : U \to \K \text{ be a linear functional s.t.} \\
        & \quad \Re(\ell) < p \text{ on } U
    \end{align*}$

    $$
    \begin{align*}
        \implies \exists\ & L : X \to \K \text{ linear s.t.} \\
        & L|_U = \ell \land \Re(L) \le p \text{ on } X
    \end{align*}
    $$

    ??? proof
        For $\K=\R$:

        Using induction on $n:= \codim(U) = \dim(X/U)$:

        === "$n=1$"
            Let $x_0 \in X \setminus U$.

            $$\implies \forall x \in X : \exists!\ u \in U, \lambda \in \R : x = u + \lambda x_0$$

            For any $r \in \R$, define

            $$L(x) := \ell(u) + \lambda r$$

            R.T.P: $\exists\ r \in \R : L \le p \text{ on } X$

            Assume $L \le p$ on $X$. That is if and only if

            $$
            \begin{align*}
                \ell(u) + \lambda r &\le p(u + \lambda x_0) \quad \forall\ u \in U, \lambda \in \R \\
                r \lambda &\le p(u + \lambda x_0) - \ell(u) \\
                r &\le p\left(\frac{u}{\lambda} + x_0\right) - \ell\left(\frac{u}{\lambda}\right) \\
                r & \le \inf_{v \in U} \left(p(v + x_0) - \ell(v)\right) & (1) \\
                r & \le \sup_{w \in U} \left(\ell(w) - p(w + x_0)\right) & (2)
            \end{align*}
            $$

            So $r$ exists iff $(1) \le (2)$.

            $$\ell(w) - p(w - x_0) \le p(v + x_0) - \ell(v) \iff \ell(w) + \ell(v) \le p(v + x_0) + p(w - x_0)$$

            This is the case, as

            $$\ell(w) + \ell(v) = \ell(v + w) \le p(v + w) \le p(v + x_0) + p(w - x_0)$$

        === "$n>1$"
            The set

            $$A:= \{(V, L_V) \mid U \subseteq V \subseteq X \text{ subspace}, L_V : V \to \R \text{ a } p \text{-bounded linear extension of } \ell\}$$

            is partially ordered given by

            $$(V_1, L_{V_1}) \le (V_2, L_{V_2}) \iff V_1 \subseteq V_2 \land L_{V_2}|_{V_1} = L_{V_1}$$

            and is non-empty as $(U, \ell) \in A$.

            ??? proof "Claim: $\exists$ an upper bound"
                $\begin{align*}
                    \text{Let } & \{(V_i, L_{V_i})\}_{i \in I} \subseteq A \text{ be a totally ordered chain} \\
                    & V := \bigcup_{i \in I} V_i \\
                    & L : V \to \R \text{ be defined by } L(x) := L_{V_i}(x) \text{ for } x \in V_i
                \end{align*}$

                Then, $(V, L)$ is an upper bound of $\{(V_i, L_{V_i})\}_{i \in I}$.

            So by Zorn's lemma, $A$ has a maximal element $(X_0, L_{X_0})$.

            Suppose $X_0 \subsetneq X$.

            Then, by induction, $\exists\ (\tilde X_0, L_{\tilde X_0}) > (X_0, L_{X_0})$, which is a contradiction.


??? corollary "Corollary 10.1"
    ## Hahn-Banach theorem for normed spaces <a id="c101"></a>

    $\begin{align*}
        \text{Let } & X \text{ be a normed space} \\
        & U \subseteq X \text{ be a subspace} \\
        & \ell : U \to \K \text{ be a continuous linear functional}
    \end{align*}$

    $$
    \begin{align*}
        \implies \exists\ & L : X \to \K \text{ continuous linear s.t.} \\
        & L|_U = \ell \land \|L\| = \|\ell\|
    \end{align*}
    $$

    ??? proof
        Let $p(x) := \|\ell\| \|x\|$.

        $\begin{align*}
            \implies & |\ell(x)| \le \|\ell\| \|x\| = p(x) \quad \forall\ x \in U \\
            \implieshref{#t103}{T.10.3} & \exists\ L : X \to \R \text{ linear s.t.} \\
            & L(x) \le p(x) \quad \forall\ x \in X \\
            \implies & |L(x)| = \max\{L(x), -L(x)\} \le p(x) \quad \forall\ x \in X \\
            \implies & \|L\| \le \|\ell\| \\
            \implies & L \text{ is continuous}
        \end{align*}$


??? example "Example 10.1"
    $\begin{align*}
        \text{Let } & X = \ell^\infty \\
        & c \subseteq \ell^\infty \text{ be the subspace of convergent sequences} \\
    \end{align*}$

    and define

    $$
    \begin{align*}
        \ell : c & \to \R \\
        (a_n) & \mapsto \lim_{n\to\infty} a_n
    \end{align*}
    $$

    ??? proof "Claim: $\ell$ is continuous"
        $$|\ell(a)| = \left|\lim_{n\to\infty} a_n\right| \le \sup_j |a_j| = \|a\|_\infty$$

    $$
    \begin{align*}
        \implieshref{#c101}{C.10.1} & \exists\ L : \ell^\infty \to \R \text{ continuous linear s.t.} \\
        & L|_c = \ell \land \|L\| = \|\ell\|
    \end{align*}
    $$


??? corollary "Corollary 10.2"
    <a id="c102"></a>
    Let $X$ be a normed vector space.

    $$
    \begin{align*}
        \implies \forall\ x \in & X \setminus \{0\} : \exists\ L \in X^* \text{ s.t. } \\
        & \|L\| = 1 \land L(x) = \|x\|
    \end{align*}
    $$

    ??? proof
        Define the functional

        $$
        \begin{align*}
            \ell : \Span\{x\} & \to \K \\
            \lambda x & \mapsto \lambda \|x\|
        \end{align*}
        $$

        $\begin{align*}
            \implies &
            \begin{cases}
                \ell(x) = \|x\| \\
                \|\ell\| = 1
            \end{cases} \\
            \implieshref{#c101}{C.10.1} & \exists\ L : X \to \K \text{ continuous linear extension of } \ell
        \end{align*}$


??? corollary "Corollary 10.3"
    ## Dual characteristic of norm <a id="c103"></a>

    Let $X$ be a normed vector space.

    $$\implies \|x\| = \sup_{L\in X^*\setminus\{0\}} \frac{|Lx|}{\|L\|}$$

    ??? proof
        === "$\ge$"
            $$\frac{|Lx|}{\|x\|} \le \sup_{y\in X\setminus\{0\}} \frac{|Ly|}{\|y\|} = \|L\| \quad \forall L \in X^*$$

        === "$\le$"
            Choose $L$ from [C.10.2](#c102).

            $$\implies \frac{|Lx|}{\|L\|} = \frac{\|x\|}{1}$$


??? corollary "Corollary 10.4"
    ## Separate point from closed subspaces <a id="c104"></a>

    $\begin{align*}
        \text{Let } & X \text{ be a Banach space} \\
        & U \subseteq X \text{ be a closed subspace} \\
        & x_0 \in X \setminus U
    \end{align*}$

    $$
    \begin{align*}
        \implies \exists\ &L \in X^* \text{ s.t.} \\
        & L_U = 0 \land Lx_0 \neq 0
    \end{align*}
    $$

    ??? proof
        Let $q : X \to X/U$ be the quotient map.

        $$
        \implies \begin{cases}
            q(u) = 0 & \forall u \in U \\
            q(x_0) \neq 0
        \end{cases}
        $$

        Let $\ell : \Span\{q(x_0)\} \to \K$ be a linear functoinal s.t. $\ell(q(x_0)) \neq 0$.

        $$\implieshref{#c101}{C.10.1} \exists\ \tilde L : X/U \to \K \text{ continuous linear extension of } \ell$$

        Finally, define

        $$
        \begin{align*}
            L : X & \to \K \\
            x & \mapsto \tilde L(q(x)) 
        \end{align*}
        $$

        Then, $L(x_0) \neq 0$ and $L|_U = 0$.


??? corollary "Corollary 10.5"
    ## Existence of closed complement <a id="c105"></a>

    $\begin{align*}
        \text{Let } & X \text{ be a Banach space} \\
        & U \subseteq X \text{ be a f.d. subspace}
    \end{align*}$

    $$\implies \exists\ \text{ closed complement of } U$$

    ??? proof
        Let $\{e_i\}_{i = 1}^n$ be a basis of $U$ and define the maps

        $$
        \begin{matrix}
            \begin{aligned}
                L_i : U & \to \K \\
                \sum_{j=1}^{n} c_j e_j & \mapsto c_i \\
            \end{aligned}
            &&&
            \begin{aligned}
                P : U &\to X \\
                x & \mapsto \sum_{j=1}^{n} L_j(x) e_j
            \end{aligned}
        \end{matrix}
        $$

        Then, by [C.10.1](#c101), we have

        $$\exists\ \tilde L_i \in X^* : \tilde L_i|_U = L_i \land \|\tilde L_i\| = \|L_i\|$$

        Let $\tilde P : X \to X$ be the resulting extension of $P$.

        ??? proof "Claim: $\ker \tilde P$ is closed"
            Let $\{x_n\} \subseteq \ker \tilde P$ be a Cauchy sequence with limit $x\in X$.
            As $\tilde P$ is continuous, we have

            $$0 = \lim_{n \to \infty} \tilde P(x_n) = \tilde P(x)$$

            Thus, $x \in \ker \tilde P$.

        ??? proof "Claim: $\tilde P^2 = \tilde P$"
            $$
            \begin{align*}
                \tilde P^2(x) &= \sum_{j=1}^{n} \tilde L_j^2(x) e_j \\
                &= \sum_{j=1}^{n} \tilde L_j(\x) e_j \\
                &= \tilde P(x)
            \end{align*}
            $$

        Let $x \in X$. Then, we have

        $$x = \tilde Px - (P-I)x$$

        where $\tilde Px \in U$ and $(P-I)x \in \ker \tilde P$, so $X = U \oplus \ker \tilde P$.
        