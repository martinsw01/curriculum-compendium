# 6 Invertibility; notion of spectrum

??? lemma "Lemma 6.1"

    $\begin{align*}
        \text{Let } & (X, \|\cdot\|_X) \text{ be a normed space} \\
        & (Y, \|\cdot\|_Y) \text{ be a Banach space}
    \end{align*}$
    
    $$ \implies B(X, Y) \text{ is a Banach space}$$

    ??? proof
        djks


??? lemma "Lemma 6.2"

    ## Submultiplicativity of the operator norm

    $\begin{align*}
        \text{Let } & A \in L(Y, Z) \\
        & B \in L(X, Y)
    \end{align*}$

    $$ \implies \|A B\| \le \|A\| \|B\|$$
    
    ??? proof

        $$
        \begin{align*}
            \|AB\| &= \sup_{x\neq 0} \frac{\|ABx\|}{\|x\|} \\
            &= \sup_{x, Bx \neq 0} \frac{\|AB x\|}{\|Bx\|} \frac{\|Bx\|}{\|x\|} \\
            &\le \sup_{y\neq 0} \frac{\|A y\|}{y} \sup_{x\neq 0} \frac{\|B x\|}{\|x\|} \\
            &= \|A\| \|B\|
        \end{align*}
        $$
        
        
??? lemma "Lemma 6.3"

    ## Invertibility of operators <a id="l63"></a>

    $\begin{align*}
        \text{Let } & X \text{ be Banach} \\
        & A \in L(X, X) \text{ s.t. } \|A-\I\| < 1
    \end{align*}$

    $$ \implies A \text{ is invertible}$$

    Moreover,

    $$A^{-1} = \lim_{n\to\infty} \sum_{k=0}^{n} \tilde A^k, \tab \tilde A = \I-A$$
    
    ??? proof
        Let $\begin{align*}S_n:=\sum_{k=1}^{n} \tilde A^k\end{align*}$

        ??? proof "Claim: $\{S_n\}$ is cauchy in $L(X, Y)$"

            $$
            \begin{align*}
                \|S_m - S_n\| &\le \sum_{k=n+1}^{m} \|\tilde A\|^k \\
                &= \|\tilde A\|^n \sum_{k=0}^{m-n} \|\tilde A\|^k \\
                &\le \|\tilde A\|^n \sum_{k=0}^{\infty} \|\tilde A\|^k \\
                &= \|\tilde A\|^n \frac{1}{1-\|\tilde A\|} \to 0
            \end{align*}
            $$

        As $L(X, Y)$ is Banach, $S_n$ converges to some $S\in L(X, Y)$.

        ??? proof "Claim: $S(\I-\tilde A) = \I$"

            $$
            \begin{align*}
                S_n(\I-\tilde A) &= \sum_{k=1}^{n} \tilde A^k - \sum_{k=1}^{n} \tilde A^{k+1} \\
                &= \tilde A - \tilde A^{n+1} \\
                &= \I - \tilde A^{n+1}\\
                S(\I-\tilde A) &= \I \\
            \end{align*}
            $$

        ??? proof "Claim: $(\I-\tilde A)A = \I$"
            Follows from the same steps as in the above claim.

        Thus, we get that $A^{-1} = S$


??? theorem "Theorem 6.1"
    ## Perturbation theory <a id="t61"></a>

    $\begin{align*}
        \text{Let } & X, Y \text{ be Banach} \\
        & T, S \in B(X, Y) \text{ with } T \text{ invertible} \\
    \end{align*}$

    $$ \|T-S\| \le \frac{1}{\|T^{-1}\|} \implies S \text{ is invertible}$$

    ??? proof
        We have that

        $$S = T-(T-S) = T(\I - T^{-1}(T-S)$$

        We have that $S$ is invertible if $\I - T^{-1}(T-S$ is invertible.

        $$
        \begin{align*}
            \|T^{-1} (T-S)\| &\le \|T^{-1}\| \|T-S\| \\
            & \overset{\text{Hyp}}{\le} \|T^{-1}\| \frac{1}{\|T^{-1}\|} \\
            &= 1
        \end{align*}
        $$

        Thus, $\I - T^{-1}(T-S)$ is invertible.

    ??? remark "Remark: Explicit inverse"

        $$
        \begin{align*}
            S^{-1} &= \left(T(I-T^{-1}(T-S))\right)^{-1} \\
            &= \left(\I - T^{-1}(T-S)\right)^{-1} T^{-1} \\
            &= (\I + T^{-1}(T-S) + T^{-1}(T-S)^2 + \dots) T^{-1} \\
            &= T^{-1} + T^{-1}(T-S)T^{-1} + T^{-1}(T-S)^2T^{-1} + \dots \\
        \end{align*}
        $$


??? definition "Definition 6.1"
    $\begin{align*}
        \text{Let } & X \text{ be Banach} \\
        & A \in L(X, X) \\
    \end{align*}$

    The **spectrum** of $A$ is defined as

    $$\Spec A := \{\lambda \in \C : A-\lambda \I \text{ is not invertible}\}$$

    The **eigenvalues** of $A$ are defined as

    $$\rho(A) := \C \setminus \Spec A$$

    For $\lambda \in \rho(A)$, we say that $(A-\lambda \I)^{-1}$ is the **resolvent** of $A$ at $\lambda$.

    The **point spectrum** is defined as

    $$\ptspec A := \{\lambda \in \C : \ker(A-\lambda \I) \neq \{0\}\}$$

    The **eigenvectors** are the points $x\in X\setminus\{0\}$ s.t. $Ax = \lambda x$ for some $\lambda \in \rho(A)$.


??? example "Example 6.1"
    === "1"
        $\begin{align*}
            \text{Let } & X = \ell^2 \\
            & A = S_- \in L(X, X)
        \end{align*}$

        Then, $\lambda = \frac{1}{2} \in \ptspec A$ is an eigenvalue of $A$ with eigenvector
        $x = (1, \frac{1}{2}, \frac{1}{2^2}, \dots)$.

    === "2"
        $\begin{align*}
            \text{Let } & X = \ell^2 \\
            & A = S_- \in L(X, X)
        \end{align*}$

        Then $\lambda = 2$ is not an eigenvalue of $A$, as

        $$2 \I - S_- = 2 \left(I - \frac{1}{2} S_-\right)$$

        is invertible by [L6.3](#l63).

    === "3"
        $\begin{align*}
            \text{Let } & X = \ell^2 \\
            & A = S^+ \in L(X, X)
        \end{align*}$

        Then $\lambda = 0\in \Spec{S^+}$, but is not an eigenvalue of $A$.