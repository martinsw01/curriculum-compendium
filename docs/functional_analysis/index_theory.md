## 7 Index Theory

??? definition "Definition: Cokernel"
    $\begin{align*}
        \text{Let } & X, Y \text{ be normed spaces} \\
        & T : X \to Y \text{ be a linear map} \\
    \end{align*}$
    
    The **cokernel** of $T$ is the quotient space $Y/\Im(T)$.

??? definition "Definition: Fredholm Operator"
    $\begin{align*}
        \text{Let } & X, Y \text{ be Banach spaces} \\
        & T \in L(X, Y)
    \end{align*}$

    $T$ is a **Fredholm operator** if

    - $\dim \ker T < \infty$
    - $\dim \coker T < \infty$

    $\overline f(X, Y)$ is the set of Fredholm operators.


??? definition "Definition: Index"
    Let $X, Y$ be Banach spaces.

    The **index** of $T \in \overline f(X, Y)$ is

    $$\ind T := \dim(\ker T) - \dim(\coker T)$$


???+ theorem "Theorem 7.1"

    ## Index theory <a id="t71"></a>

    Let $X, Y$ be Banach spaces.

    === "1"
        $\overline f(X, Y)$ is an open subset of $L(X, Y)$.

    === "2"
        $\ind: \overline f(X, Y) \to \Z$ is locally constant.

    === "3"
        The index

        $$ \ind: (\overline f(X, X), \oplus) \to (\Z, +)$$

        is a semi-group homomorphism.

        $$\ind(T \circ S) = \ind T + \ind S$$

    ???+ proof
        === "1"
            Idea: Make $T$ invertible and use that invertibility is preserved under small perturbations.

            Notation: $X = U \oplus V$ if $U$ is a complement of $V$ in $X$.


            **Step 1: Decompose $X$.**

            We know that $\dim \ker T < \infty$. This implies there exists a closed subspace $V \subseteq X$ such that

            $$ X = \ker T \oplus V$$

            **Step 2: Decompose $Y$.**

            $\dim(\coker T) < \infty$

            $\begin{align*}
                \text{Let } & [y_1, ..., y_n] \text{ be a basis of } \coker T \\
                & W:= \Span\{y_1, ..., y_n\}
            \end{align*}$

            ???+ proof "Claim: $Y=W + \Im T$"

                === "Existence"
                    Let $y\in Y$.

                    $$
                    \begin{align*}
                        \implies &[y] \in \coker T \\
                        \implies & [y] = \sum_{i=1}^{n} \lambda_i [y_i] \\
                        \implies &y = (y - \sum_{i=1}^n \alpha_i y_i) + \sum_{i} \alpha_i y_i \\ 
                    \end{align*}
                    $$

                    where $y-\sum_{i=1}^n \alpha_i y_i \in \Im T$ and $\sum_{i=1}^n \alpha_i y_i \in W$.

                === "Uniqueness"
                    Easy? Do it at home.

            **Step 4: manufacture an invertible operator from $T$**

            Define the operator

            $$
            \begin{align*}
                \tilde T : V \oplus W & \to Y \\
                (v, w) &\mapsto Tv + w
            \end{align*}
            $$

            $\tilde T$ is bijective, as we have factored out $\Ker T$.

            Let $S \in L(X, Y)$ and $\tilde S : V \times W \to Y$ defined in the same way as $\tilde T$.

            Since surjectivity is preserved under small perturbations [T.6.1](../invertibility/#t61), </br>
            Since surjectivity is preserved under small perturbations [T.6.1](invertibility.md#t61),
            we have that $\tilde S$ is bijective if $\|\tilde S - \tilde T\|$ is small.

            $$
            \begin{align*}
                (\tilde S - \tilde T)(v, w) & = (Sv + w) - (Tv + w) \\
                & = (S-T)v \\
                \|\tilde S - \tilde T\| &= \|S-T\|
            \end{align*}
            $$

            Thus, $\tilde S$ is invertible if $\|S-T\|$ is small.


            **Step 5: Check that S fredholm and $\ind S = \ind T$**

            ??? proof "Claim: $\ker S \subset \Ker T$"

                We have that $S|_V = \tilde S|_{V\times \{0\}}$ is injective.

                $$
                \begin{align*}
                    \implies &\ker S \cap V &= \{0\} \\
                    \implies &\ker S \subseteq \ker T
                \end{align*}
                $$

                Choose a compliment $Z$ of $\ker S$ in $\Ker T$. This implies that

                $$
                \begin{align*}
                    X  = \ker T \oplus V \\
                    \Ker T = \Ker S \oplus Z
                \end{align*}
                $$

                impies $X = V \oplus \Ker S \oplus Z$.

            ??? proof "Claim: $Y=W\oplus \Im S|_V$"

                Existance:

                As $\tilde S$ is onto, we have that

                $$\forall y\in Y, \exists\ (v, w) \in V \oplus W \text{ s.t. } \tilde S(v, w) = y$$

                Skips uniqueness

            Since $S$ is fredholm, we have that $Y= W' \oplus \Im S$ with $\dim W' = \dim(\coker S)$.

            $$
            \begin{align*}
                Y &= W' \oplus \Im S \\
                &= W' \oplus \Im S|_{Z \oplus V} \\
                &= W' \oplus \Im S|_Z \oplus \Im S|_V \\
                \implies \dim (\ker T) &= \dim(\ker S) + \dim Z \\
                \implies \dim(\coker T) &= \dim W'\\
                &= \dim W' + \dim(\Im S|_Z) \\
                &= \dim(\coker S) + \dim Z \\
                \dim(\Ker T) - \dim(\coker T) &= \dim(\ker S) + \dim Z - \dim(\coker S) - \dim Z \\
                &= \dim(\ker S) - \dim(\coker S) \\
            \end{align*}
            $$



??? example
    === "$A_t$"
        $\begin{align*}
            \text{Let } & X = Y = \ell_2 \ \\
            & A_t \in \overline f(X, X)
        \end{align*}$

        sunch that

        $$A_t(a_1, a_2, ...) = (ta_1, ta_2, ...)$$

        First of all, $t\neq 0 \iff A_t$ is invertible.

        For $t=0$, we have that $\ker A_0 = \{\(a, 0, 0, ...\) \in \ell_2 : a \in \C\}$.

        $$ \implies \dim \ker A_0 = 1$$

        Moreover, $\coker A_0 = \ell_2 / \Im A_0 \cong \Ker A_0$.

        $$
        \begin{align*}
            & \implies \dim(\coker A_0) = 1 \\
            & \implies \ind A_0 = 0
        \end{align*}
        $$

    === "$S^+$"
        $\begin{align*}
            \text{Let } & X=Y=\ell_2 \\
            & S^+ \in \overline f(X, X) \text{ be the right shift operator}
        \end{align*}$

        Then, we have $\dim \ker S^+ = 0$ and $\coker S^+ \cong \Span\{e_1\}$.

        $$ \implies \ind S^+ = -1$$


??? lemma "Lemma 7.1"
    ## Completeness of quotient spaces

    $\begin{align*}
        \text{Let } & X \text{ be Banach} \\
        & U \subseteq X \text{ be closed}
    \end{align*}$

    Then, we have that

    1. $\|[x]\| = \inf_{u \in U} \|x-u\|$ is a norm on $X/U$.
    2. $X/U$ is Banach.

    ??? proof
        === "1"
            === "Homogeneity"
                $\begin{align*}
                    \text{Let } & 0 \neq \lambda \in \K \\
                    & x \in X
                \end{align*}$

                $$
                \begin{align*}
                    \implies \|\lambda[x]\| &= \inf_{u \in U} \|\lambda x - u\| \\
                    &= \inf_{u \in U} |\lambda| \|x - \frac{1}{\lambda} u\| \\
                    &= |\lambda| \inf_{u \in U} \|x - \frac{1}{\lambda} u\| \\
                    &= |\lambda| \|[x]\|
                \end{align*}
                $$

            === "Triangle inequality"
                $\begin{align*}
                    \text{Let } & x, y \in X
                \end{align*}$

                $$
                \begin{align*}
                    \implies \|[x+y]\| &= \inf_{u \in U} \|x+y+u\| \\
                    &= \inf_{u \in U} \|x+u + y+u\| \\
                    &\le \inf_{u \in U} \|x+u\| + \|y+u\| \\
                    &\le \inf_{u \in U} \|x+u\| + \inf_{u \in U} \|y+u\| \\
                    &= \|[x]\| + \|[y]\|
                \end{align*}
                $$

            === "Positive definiteness"
                $$
                \begin{align*}
                    0 = \|[x]\| &= \inf_{u \in U} \|x+u\| \\
                    &= \inf_{u \in U} \|x-u\| \\
                \end{align*}
                $$

                $$
                \begin{align*}
                    \implies &\exists\ \{U_k\} \subseteq U \text{ s.t. } u_k\to x\in \overline U=U \\
                    \implies &[x] = [0]
                \end{align*}
                $$

        === "2"
            
            


??? corollary "Corollary 7.1"

    Let $X=Y=\ell_2$.

    Then there exists an open set of non-invertible operators.

    In aprticular, the set of invertible operators is not dense.


    ??? remark
        Does not hold for finite dimensional spaces, as non-invertible operators lies on the surface
        $\det A = 0$.


??? lemma "Lemma 7.2"
    $\begin{align*}
        \text{Let } & X, Y \text{ be Banach} \\
        & T \in L(X, Y) \\
    \end{align*}$

    $$ \dim(\coker T) < \infty \iff \Im T \text{ is cloesd}$$



??? lemma "Lemma 7.3"
    If $X$ is Banach and $U\subseteq X$ is a finite dimensional subspace

    $$ \exists\ \text{ closed subspace } V \text{ s.t. } X = U \oplus V$$


## Compact perturbations

??? definition "Definition 7.1"
    ## Compact subsets

    Let $X$ be a Banach space.

    $A \subseteq X$ is called **compact** if

    - Every sequence in $A$ has an accumulation point in $X$.
    - Alternatively every open cover of $A$ has a finite subcover.

    $A$ is called **relatively compact** if its closure $\overline A$ is compact.


??? definition "Definition 7.2"
    Let $X, Y$ be Banach spaces.

    $T \in L(X, Y)$ is called **compact** if

    - for every bounded sequence $\{x_n\} \subseteq X$, $\{Tx_n\}$ has a convergent subsequence.in $Y$
    - Alternatively, $T$ maps bounded sets to relatively compact sets.


??? theorem "Theorem 7.2"
    <a id="t72"></a>

    Let $X, Y$ be Banach spaces.

    $\begin{align*}
        \text{Let } & T \in \f(X, Y) \\
        & K \in L(X, Y) \text{ be compact}
    \end{align*}$

    $$ \implies T-K \in \f(X, X) \land \ind(T-K) = \ind T$$

    In particular, if $T\in L(X, Y)$ is invertible and $K\in L(X, Y)$ is compact, then $T+K$
    is fredholm and $\ind(T-K) = 0$.

    ??? remark
        As opposed to [T.7.1](#t71), this is a global result, so perturbations can be large.