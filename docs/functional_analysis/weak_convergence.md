# 11 Weak convergence

??? definition "Definition 11.1"
    Let $X$ be a Banach space

    1. $\quad x_j \weakto x \in X \iff \forall\ L \in X^* : L(x_j) \to L(x)$
    2. $\quad L_j \weakstarto L \in X^* \iff \forall\ x \in X : L_j(x) \to L(x)$


??? proposition "Proposition 11.1"
    ## Justification of the name "weak" <a id="p111"></a>

    1. $\quad x_j \to x \implies x_j \weakto x$
    2. $\quad L_j \to L \implies L_j \weakstarto L$

    ??? proof
        === "1."
            Follows from continuity of $L$.

        === "2."
            $$
            \begin{align*}
                L_j \to L & \iff \|L_j - L\| \to 0 \\
                & \iff |L_jx - Lx| \to 0 \quad \forall\ x \in X \\
                & \implies L_j \weakstarto L
            \end{align*}
            $$


??? example "Example 11.1"
    The converse of [P.11.1](#p111) is not true.

    Let $X = \ell^2$

    ??? proof "Claim: $e_j \weakto 0$"
        Let $L \in X^*$.

        $\begin{align*}
            \implies \exists\ & a = (a_1, a_2, \ldots) \in \ell^2 : \\
            & L(e_j) = \inner{e_j}{a} = a_j \to 0
        \end{align*}$

    However, $e_j \not\to 0$.


??? proposition "Proposition 11.2"
    $\begin{align*}
        \text{Let } & X \text{ be a Banach space} \\
        & x_j \in X \\
        & x, x' \in X
    \end{align*}$

    $$
    \begin{align*}
        a) && x_j \weakto x \land x_j \weakto x' &\implies x = x' \\
        b) && x_j \weakto x &\implies \{x_j\} \text{ is bounded} \\
        c) && x_j \weakto x &\implies \|x\| \leq \liminf_{j \to \infty} \|x_j\| \\
        d) && x_j \weakto x \land x_j \in U \text{ closed subspace} &\implies x \in U
    \end{align*}
    $$

    ??? proof
        === "$a)$"
            By continuity, we have that

            $$\forall\ L \in X^* : L(x - x') = \lim_{j \to \infty} L(x_j - x') = 0$$

            In particular, by the Hahn-Banach theorem [C.10.2](../duality/#c102), we have

            $$\exists\ L \in X^* : L(x - x') = \|x - x'\| = 0$$

            so $x = x'$.

        === "$b)$"
            We have the following equivalences:

            $$
            \begin{align*}
                x_n \weakto x &\iff \forall\ L \in X^* : L(x_n) \to L(x) \\
                &\iff \forall\ L \in X^* : (x_n)_{ev}(L) \to x_{ev}(L) \\
                &\iff \forall\ L \in X^* : (x_n)_{ev}(L) \text{ is bounded} \\
            \end{align*}
            $$

            So $(x_n)_{ev}$ is pointwise bounded, and by the uniform boundedness principle, it is 
            uniformly bounded.

            $$
            \begin{align*}
                \|(x_n)_{ev}\|_{L(X^*, \K)} =& \sup_{L \in X^*\setminus\{0\}} \frac{|(x_n)_{ev}(L)|}{\|L\|} \\
                =& \sup_{L \in X^*\setminus\{0\}} \frac{|L(x_n)|}{\|L\|} \\
                \eqhref{../duality/#c103}{C.10.3} & \|x_n\|
            \end{align*}
            $$

            Hence, $\{x_n\}$ is bounded.

        === "$c)$"
            $$
            \begin{align*}
                |L(x)| =& \lim_{j \to \infty} |L(x_j)| \leq \|L\| \liminf_{j \to \infty} \|x_j\| \\
                \implieshref{../duality/#c102}{C.10.2}& \exists L \in X^* : L x = \|x\| \land \|L\| = 1 \\
                \implies & \|x\| \le \liminf_{j \to \infty} \|x_j\|
            \end{align*}
            $$

        === "$d)$"
            Assume $x\notin U$. By the Hanh-Banach theorem [C.10.4](../duality/#c104) we have

            $$\exists\ L \in X^* : L|_U = 0 \land L(x) \neq 0$$

            Thus, we get $0=L(x_j) \to L(x) \neq 0$, which is a contradiction.


??? definition "Definition 11.2"
    ## Reflexive Banach space

    A Banach space $X$ is called reflexive if

    $$\forall f \in L(X^*, \K) : \exists\ x \in X : \forall\ L \in X^* : f(L) = L(x)$$

    Informally, we write $X \cong X^{**}$.

??? theorem "Theorem 11.1"
    ## Replacement for the Bolzano-Weierstrass theorem

    Let $X$ be a Banach space.

    $$X \text{ is reflexive} \implies \text{every bounded sequence in } X \text{ has a weakly convergent subsequence}$$

    ??? proof
        === "Separable space"
            $$
            \begin{align*}
                (1) &&& \begin{aligned}
                    x_j \weakto x \in X & \iff \forall\ L \in X^* : L(x_j) \to L(x) \\
                    & \iff (x_j)_{ev} \weakto x_{ev} \in X^{**}
                \end{aligned} \\
                (2) &&& (x_j) \text{ bounded in } X \iffhref{../duality/#c103}{C.10.3} ((x_j)_{ev}) \text{ bounded in } X^{**} \\
                (3) &&& \begin{aligned}
                    &X^{**} \cong X \text{ is separable} \\
                    & \implieshref{#l112}{L.11.2} X^* \text{ is separable}
                \end{aligned}
            \end{align*}
            $$

            This yields

            $$
            \begin{align*}
                (x_j) \text{ bounded in } X \overset{(2)}{\iff}& ((x_j)_{ev}) \text{ bounded in } X^{**} \\
                \implieshref{#t112}{T.11.2} & \exists\ \text{ subsequence } (x_{j_n})_{ev} \weakto x \in X^{**} \\
                \overset{(1)}{\implies} & x_{j_n} \weakto x \in X
            \end{align*}
            $$

        === "Non-separable space"
            $\begin{align*}
                \text{Let } & X \text{ be non-separable} \\
                & \{x_j\} \subseteq X \text{ bounded} \\
                & U = \overline{\Span}\{x_j\} \subseteq X
            \end{align*}$

            Then, $U$ is separable, and by [L.11.3](#l113) reflexive.
            Thus, $(x_j)$ has a weakly convergent subsequence in $U$.


??? theorem "Theorem 11.2"
    ## Banach-Alaoglu theorem

    Let $X$ be a Banach space.

    $$X \text{ is separable} \implies \text{ Every bounded sequence in } X^* \text{ has a weak* convergent subsequence}$$

    ??? proof
        $\begin{align*}
            \text{Let } & (L_j) \subseteq X^* \text{ be bounded} \\
            & \{x_1, x_2, \ldots\} \subseteq X \text{ be a dense subset}
        \end{align*}$

        ??? proof "Claim: $(L_k(x_k))_j$ is a bounded sequence in $\K$"
            From the boundedness of $(L_j)$, we have

            $$|L_j(x_k)| \leq \|L_j\| \|x_k\| < \infty$$

        $\begin{align*}
            \implieshref{https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem}{B.W.} &
            \exists\ \text{ convergent subsequence } (L_{j_n}(x_k))_n \\
            \overset{\text{diag}}{\implies} & \exists\ \text{ subsequence } (L_{j_n})_n : (L_{j_n}(x_k))_n
            \text{ converges } \forall\ k
        \end{align*}$

        Let $L : \Span\{x_1, x_2, \ldots\} \to \K$ be a function defined by

        $$L(x_k) := \lim_{n \to \infty} L_{j_n}(x_k)$$

        ??? proof "Claim: $L$ is linear"
            Follows from the continuity of linear combinations and linearity of the $L_j$.

        ??? proof "Claim: $L$ is continuous"
            $$|L(x_k)| = \lim_{n\to \infty} |L_{j_n}(x_k)| \leq \sup_j \|L_j\| \cdot \|x_k\| < \infty$$

        $\implieshref{#l111}{L.11.1} \exists!\ \tilde L : \overline{\Span}\{x_1, x_2, \ldots\} \to \K$
        linear continuous extension of $L$.

        Then, it remains tp show that $|L_{j_n}(x) - \tilde L(x)| \to 0$ for all $x \in X$.

        We have that

        1. $|L_{j_n}(x_k) - \tilde L(x_k)| \to 0$ for all $k$
        2. $\forall\ x \in X, \varepsilon > 0 \exists\ k : \|x - x_k\| < \varepsilon$

        $$
        \begin{align*}
            \implies |L_{j_n}(x) - \tilde L(x)|
            &\leq |L_{j_n}(x) - L_{j_n}(x_k)| + |L_{j_n}(x_k) - \tilde L(x_k)| + |\tilde L(x_k) - \tilde L(x)| \\
            &\!\overset{n\to\infty}{\leq} \sup_m \|L_m\| \cdot \|x - x_k\| + \|\tilde L\| \cdot \|x - x_k\| \\
            & < \left(\sup_m \|L_m\| + \|\tilde L\|\right) \varepsilon
        \end{align*}
        $$

        Therefore, we get

        $$\forall\ x \in X : |L_{j_n}(x) - \tilde L(x)| \to 0 \iff L_{j_n} \weakstarto \tilde L \in X^*$$


??? lemma "Lemma 11.1"
    ## Continuous extension of linear operators

    $\begin{align*}
        \text{Let } & X \text{ be a normed space} \\
        & Y \text{ be a Banach space} \\
        & D \subseteq X \text{ be a dense subspace} \\
        & T \in L(D, Y)
    \end{align*}$

    $$\implies \exists!\ \tilde T \in L(X, Y) : \tilde T|_D = T$$

    ??? proof
        $\begin{align*}
            \text{Let } & x \in X \\
            & \{x_j\} \subseteq D : x_j \to x
        \end{align*}$

        Then, we have

        $$
        \begin{align*}
            (x_j) \text{ is convergent } \implies& (x_j) \text{ is Cauchy} \\
            \overset{\text{cont}}{\implies}& (Tx_j) \text{ is Cauchy} \\
            \implies& (Tx_j) \text{ is convergent}
        \end{align*}
        $$

        Define

        $$\tilde T(x) := \lim_{j \to \infty} T(x_j)$$


??? lemma "Lemma 11.2"
    Let $Y$ be a Banach space.

    $$Y^* \text{ is separable} \implies Y \text{ is separable}$$

    ??? proof
        Exercise 52


??? lemma "Lemma 11.3"
    $\begin{align*}
        \text{Let } & X \text{ be a reflexive Banach space} \\
        & U \subseteq X \text{ be a closed subspace}
    \end{align*}$

    $$\implies U \text{ is reflexive}$$

    !!! proof "Proof: Omitted"