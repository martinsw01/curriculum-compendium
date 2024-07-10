# 1.4 Code space of an IFS

Let $(X, \F)$ be an IFS and $\A = \lim_{n\to\infty} \F^n(A)$ for any $A\in\H(X)$ be the attractor.
Note that

$$\F^n(A) = \bigcup_{i_1,\ldots,i_n = 1}^N f_{i_1}\circ\cdots\circ f_{i_n}(A)$$

To simplify the notation, we define the code space of the IFS:

???+ definition "Code space of an IFS"
    The **code space** of an IFS $(X, \F)$ is the set of all sequences of indices

    $$\Sigma_N := \{1, \dots, N\}^{\N}$$

    Elements $\s, \tau, \dots$ are codes

    $$\s = (\sigma_1, \sigma_2, \dots)$$

    with $\sigma_i\in \{1, \dots, N\}$. Denote the first $n$ elements of $\sigma$ by

    $$\s(n) := (\sigma_1, \sigma_2, \dots, \sigma_n)$$

Then, we can denote

$$f_{\s(n)} := f_{\sigma_1}\circ\cdots\circ f_{\sigma_n}$$

and

$$
\begin{align*}
    \F^n(A) &= \bigcup_{\s\in\Sigma_N} f_{\s(n)}(A)\\
    \A &= \lim_{n\to\infty} \bigcup_{\s\in\Sigma_N} f_{\s(n)}(A) \\
    A_{\s(n)} &:= f_{\s(n)}(A)
\end{align*}
$$

Furthermore, $\Sigma_N$ can be made into a metric space by the Fréchet metric:

$$d_F(\s, \tau) := \sum_{i=1}^\infty \frac{|\sigma_i - \tau_i|}{(N+1)^i}$$


???+ theorem "Theorem 4"
    Let $(X, \F)$ be an IFS with an attractor $\A$.

    Then, the following map is a continuous surjection:

    $$
    \begin{align*}
        \gamma : \Sigma_N &\to \A \\
        \s &\mapsto \lim_{n\to\infty} f_{\s(n)}(x)
    \end{align*}
    $$

    where the limit is independent of $x\in X$.

    ??? proof
        By problem set 3, $(\s, d_F)$ is a compact metric space.

        $\begin{align*}
            \text{Let } & x, y \in X \\
            & L := \max_{i=1, \dots, N} \Lip(f_i)
        \end{align*}$

        $$\implies |f_{\s(n)}(x) - f_{\s(n)}(y)| \leq L^n|x-y|$$

        Assume w.l.o.g that $X$ is compact
        (Let $K\in\H(X)$ and define $\hat K:=\clos_{\H(X)}\bigcup_{i\in\N_0}\F^i(K)$).

        === "Existence"
            Then, we get
    
            $$
            \begin{align*}
                |f_{\s(n)}(x) - f_{\s(n)}(y)| &\leq L^n \diam(X) \\
                |f_{\s(n)}(x) - f_{\s(m)}(y)| &\leq L^{\min\{n,m\}} \diam(X) \\        
            \end{align*}
            $$
    
            Moreover, we have $|\gamma(\s(n)) - \gamma(\s(m))| = |f_{\s(n)}(x) - f_{\s(m)}(y)|$,
            so the limit exists and is independent of $x\in X$.

        === "Continuity"
            Let $\varepsilon > 0$. $\implies \exists\ n : L^n \diam(X) < \varepsilon$.

            Let $\s, \tau\in\Sigma_N$ with $\s(n) = \tau(n)$ and $\sigma_{n+1} \neq \tau_{n+1}$.

            $$
            \begin{align*}
                \implies & d_F(\s, \tau) = \sum_{i=n+1}^\infty \frac{|\sigma_i - \tau_i|}{(N+1)^i} < \frac{1}{(N+1)^n} \\
                \implies & |\gamma(\s) - \gamma(\tau)| = \lim_{n\to\infty} |f_{\s(n)}(x) - f_{\tau(n)}(x)| \le L^n \diam(X) < \varepsilon
            \end{align*}
            $$

        === "Surjectivity"
            Let $y\in\A$.
            
            $\begin{align*}
                & \implies \exists\ (\sigma_\nu(m))_{\nu\in\N} \subseteq \Sigma_N : \lim_{\n\to\infty} f_{\sigma_\nu(n)}(x) = y \\
            \end{align*}$

            $\Sigma_N$ is compact $\implies \exists (\sigma_{\nu_\mu})_{\mu\in\N} \subseteq (\sigma_\nu)_{\nu\in\N} : \sigma_{\nu_\mu} \to \tau$

            Let $c(\mu) := \card\{\n \in \N : \sigma_{\nu_\mu}(j) = \tau(j) \}$. Then, $c(\mu) \to \infty$, yielding

            $$|f_{\sigma_{\nu_\mu(n)}}(x) - f_{\tau(n)}(x)| \le L^{c(\mu)} \diam(X) \to 0$$

            so $y=\gamma(\tau)$.


???+ remark
    1. $\gamma$ is in general not injective (Sierpinski triangle).
    2. $\forall i\neq j\in\{1,\dots,N\} : f_i(A_0) \cap f_j(A_0) = \emptyset \implies \gamma$ is injective.
    3. Let $\s \in \Sigma_N, A\in\H(X)$

    $$\implies \gamma(\s) = \bigcap_{n\in\N} A_{\s(n)}$$


???+ definition
    ## Address set

    1. Let $\a\in\A$. The address **set of** $\A$ is given by $\gamma^{-1}(\A)$.
    2. Each element of $\gamma^{-1}(\A)$ is called an **address of** $\A$.
    3. $\gamma$ is (sometimes) refered to as the **address function** of the IFS.


???+ definition
    ## Totally disconnected IFS

    An IFS is called totally disconnected if $\gamma^{-1}(\a)$ is a singleton for all $\a\in\A$.


For $\s, \omega\in\Sigma_N$, let $i$ be the first index for which $\sigma_i\neq\sigma_i$
and define the binary operation $\prec$ by

$$\s\prec\omega \iff \omega_i < \sigma_i$$

Then, $\prec \subset \Sigma_N\times\Sigma_N$ is a strict linear order:

1. $\forall \s\in\Sigma_N : \s\nprec\sigma$
2. $\forall \s, \omega, \tau\in\Sigma_N : \s\prec\tau \land \tau\prec\omega \implies \s\prec\omega$

Let $\iota := (1, 1, \dots) = \overline 1$ and $\overline\omega := (N, N, \dots) = \overline N$. Then,
$\forall\iota\neq\s\neq\overline\omega : \iota\prec\s\prec\overline\omega$.


???+ proposition
    $\gamma^{-1}(\a)$ has a maximal element w.r.t. $\prec$ for all $\a\in\A$.

    ??? proof
        1. Let $\sigma_1$ be the smallest first component of all elements in $\gamma^{-1}(\a)$.
        2. Choose inductively $\sigma_i$ to be the smallest $i$-th component of elements in
        $\gamma^{-1}(\a)$ whose first $i-1$ components are $\sigma_1, \dots, \sigma_{i-1}$.

        Then, $\s := (\sigma_1, \sigma_2, \dots)$ is the unique maximal code.


???+ definition
    ## Tops code space

    $\begin{align*}
        \text{Let } & (X, \F) \text{ be an IFS} \\
        & \A &\text{ be the attractor} \\
        & \gamma : \Sigma_N \to \A \text{ be the address function} \\
        & \a \in \A
    \end{align*}$

    Define the map

    $$\tau(\a) := \max\{\gamma^{-1}(\a)\} \quad \text{w.r.t. } \prec$$

    The set $\Omega := \tau(\A)$ is called the **tops code space** and
    $\tau : \A \to \Omega$ is called the **tops function** for $(X, \F)$.

    ???+ remark
        From the above proposition, we see that $\tau$ is a bajection from
        $\A \to \Omega$ with the inverse being $\gamma$.

        As we have seen, $\tau^{-1} : \Omega \to \A$ is bijective and
        continuous. 