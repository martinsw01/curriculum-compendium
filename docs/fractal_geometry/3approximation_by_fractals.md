# Approximation by fractal

??? theorem "Theorem 1: Collage theorem"
    $\begin{align*}
        \text{Let } & (X, d) \text{ be a complete metric space} \\
        & \varepsilon > 0 \\
        & A \in \H(X)
    \end{align*}$

    Suppose an IFS $(X, \F)$ can be found s.t.

    $$h(A, \F(A) < \varepsilon$$

    Let $\A = \F(\A)$ be the attractor, and $L:=\Lip \F$.

    $$\implies h(A, \A) \le \frac{\varepsilon}{1-L}$$

    ??? proof
        $$
        \begin{align*}
            h(A, \A) &\le h(A, \F(A)) + h(\F(A, \A) \\
            & < \varepsilon + h(\F(A), \F(\A)) \\
            & \le \varepsilon + L h(A, \A) & \square
        \end{align*}
        $$


??? definition "Definition 1"
    ## Similarity transformation

    A map

    $$
    \begin{align*}
        S : \ & \R^n \to \R^n \text{ s.t.}\\
        & \|S(x) - S(y)\| = s \|x-y\| \tab \forall x, y \in \R^n, s\ge 0
    \end{align*}
    $$

    is called a **similarity (transformation)**. $s$ s the **similarity constant**.

    For $s < 1$, $S$ is a **contractive similitude**.


??? definition "Definition 2"
    === "Homotopy"
        $$
        \begin{align*}
            H_S : \R^n & \to \R^n \\
            x & \mapsto s \ x & s>0
        \end{align*}
        $$

    === "Orthogonal"
        $$
        \begin{align*}
            O : \R^n  \to \R^n \\
            O O^T = O^T O = \I
        \end{align*}
        $$

    === "Translation by $v$"
        $$
        \begin{align*}
            \tau_v : \R^n & \to \R^n \\
            x & \mapsto x + v & v \in R^n
        \end{align*}
        $$


??? proposition "Proposition 1"
    $$S: \R^n \to \R^n \text{ is a similitude} \iff S = H_S \cdot O \cdot \tau_v$$

    ??? proof
        Left as an exercise.

        Hint:
    
        Let $s:=\Lip S > 0$ </br>
        Consider $g(x) = s^{-1} (S(x) - S(0))$  (take out tanslation)


??? definition "Definition 3"
    ## Open set condition (OSC) <a id="d3"></a>

    $\begin{align*}
        \text{Let } & \emptyset \neq X \subseteq \R^n \\
        & (X, \F) \text{ be an IFS of similitudes.}
    \end{align*}$

    The IFS satisfies the **open set condition** if

    $$
    \begin{align*}
        \exists\ &\emptyset \neq G \overset{open}{\subseteq} \R^n \text{ s.t.} \\
        &\bigsqcup_{i=1}^N f_i(G) \subseteq G
    \end{align*}
    $$


??? remark
    Let $s_i:=\Lip f_i$

    $$\implies \sum_{i=1}^N s_i^n < 1$$


??? theorem "Theorem 2"
    $\begin{align*}
        \text{Let } & (X, \F) \text{ be an IFS of similitudes} \\
        & s_i := \Lip f_i
    \end{align*}$

    Suppose $(X, \F)$ satisfies [OSF](#d3)

    $$\implies \dim_H(\A) = d$$

    where $d$ satisfies

    $$\sum_{i=1}^N s_i^d = 1$$

    ??? proof
        Idea:

        Suppose $\begin{align*}\A=\bigsqcup_{i=1}^N f_i(\Alpha)\end{align*}$. (not allways the case!)

        $$
        \begin{align*}
            \H^d(\A) &= \sum_{i=1}^N \H^d(f_i(\A)) \\
            & = \sum_{i=1}^N s_i^d \H^d(\A)
        \end{align*}
        $$


??? theorem
    Let the attractor $\A$ be generated by $(X, \F)$ of affine maps

    $$f_i(x) = A_ix + v_i, \tab A_i \text{ is a matrix}$$

    Then, for almost all $(v_1, ..., v_N)$:

    $$\dim_H \A = \dim_B \A$$

    ??? proof
        By Falcone 1988


??? definition "Definition: Code space"
    ## Code space

    $$\Sigma_N := \{1, ..., N\}^\N$$

    Elements are given by $\sigma=(\sigma_1, \sigma_2, ...) \in \Sigma_N$, with $\sigma_i \in \{1, ..., N\}$


???+ notation "Notation"
    We have that

    $$
    \begin{align*}
        \F^n(A) &= \bigcup_{i=1}^N f_i(A) \\
        &= \bigcup_{i_1, ..., i_n=1}^N f_{i_1} \circ ... \circ f_{i_n}(A) \tab (*)
    \end{align*}
    $$

    Using elements from the code space $\Sigma_N$, we denote

    $$\begin{align*}
        \sigma(n)&:=(\sigma_1, ..., \sigma_n) \\
        f_{\sigma(n)}&:=f_{\sigma_1} \circ ... \circ f_{\sigma_n}
    \end{align*}$$

    Using this notation, we can reformulate $(*)$ to  

    $$
    \begin{align*}
        \F^n(A) &= \bigcup_{\sigma(n) \in \Sigma_N} f_{\sigma(n)}(A) \\
        \A &= \lim_{n\to\infty} \bigcup_{\sigma(n) \in \Sigma_N} f_{\sigma(n)}(A)
    \end{align*}
    $$


??? proposition "Proposition: Completeness of the code space"
    ## Completeness of the code space
    
    Let the metric $d_F : \Sigma_N^2 \to \R$ be given by

    $$d_F(\sigma, \tau):=\sum_{i=1}^\infty \frac{|\sigma_i-\tau_i|}{(N+1)^i}$$

    $\left(\Sigma_N, d_F\right)$ forms a complete metric space.


???+ theorem "Theorem 4"
    Define

    $$
    \begin{align*}
        \gamma : \Sigma_N & \to \alpha \\
        \sigma & \mapsto \lim_{n\to\infty} f_{\sigma(n)} (x)
    \end{align*}
    $$

    $$\gamma \text{ is continuous, and independent of } x\in X$$

    ??? proof
        === "Existence and uniqueness"
            $\begin{align*}
                \text{Let } &x, y\in X \\
                &L:=\max_{1\le i\le N} \Lip f_i
            \end{align*}$

            Assuming without loss of generality that $X$ is compact:

            $$
            \begin{align*}
                \implies |f_{\sigma(n)}(x)-f_{\sigma(n)}(y)|
                & \le L^n |x-y| \\
                & \le L^n \diam X \\
                |f_{\sigma(m)}(x)-f_{\sigma(n)}(y)| & \le L^{n'} \diam X & n':=\min\{n, m\}
            \end{align*}
            $$

            We get a cauchy sequence in $\Sigma_N$ independent of $x\in X$. Thus, the limit exists and is unique.
            $\tab\square$

        === "Continuity"
            Let $\varepsilon >0$

            $$
            \begin{align*}
                \implies
                \begin{cases}
                    \exists\ n \in \N \text{ s.t.} \\
                    L^n \diam X < \varepsilon
                \end{cases}
            \end{align*}
            $$

            $\begin{align*}
                \text{Let } & \sigma, \tau \in \Sigma_N \text{ s.t.} \\
                & \sigma(n) = \tau(n)
            \end{align*}$

            Then, we get

            $$
            \begin{align*}
                d_F(\sigma, \tau)
                &= \sum_{i=n+1}^\infty \frac{\varepsilon}{1-L} < \frac{1}{(N+1)^n} \\
                \implies |\gamma(\sigma)-\gamma(\tau)|
                &= \lim_{n\to\infty} |f_{\sigma(n)}(x)-f_{tau(n)}(y)| \\
                & \le L^n \diam X < \varepsilon & \square
            \end{align*}
            $$

        === "Surjectivity"
            Let $y \in \A$. By the definition of $\gamma$

            $$
            \begin{align*}
                \exists\ & (\sigma_\mu(n)) \subset \Sigma_N \text{ s.t.} \\
                & y = \lim_{n\to\infty} f_{\sigma_\mu(n)}(x) \\
                ...
            \end{align*}
            $$
