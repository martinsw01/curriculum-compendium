# 2.3 Basis of Fractal Functions

Let $X=[0, N]$ and define

$$
\begin{align*}
    u_i : X &\to X \\
    x & \mapsto \frac{x}{N} + i - 1
\end{align*}
$$

Then, the family $\{u_i\}_{i=1}^N$ forms a partition of $X$: $I_i = u_i(X) =: [x_{i-1}, x_i]$.
Choose $p_i^k \in \Pi^k[0, N]$ a polynomial of order $k$, and fix $L_i \in (-1, 1)$.
So our function space becomes $(C[0, N], \|\cdot\|_\infty)$. Then, we define the R.B. operator

$$
\begin{align*}
    T : C[0, N] &\to C[0, N] \\
    f &\mapsto \sum_{i=1}^{N} p_i^k \circ u_i^{-1} \Chi_{I_i} + \sum_{i=1}^{N} L_i(f \circ u_i^{-1}) \Chi_{I_i}
\end{align*}
$$

Then, for continuity, we require $Tf(x_i^-) = Tf(x_i^+)$. If $\max |L_i| < 1$, then $T$ is
a contraction on $(C[0, N], \|\cdot\|_\infty)$, so there exists a unique fixed point
$f^* \in C[0, N]$.

If $L_i$ are fixed, then the fixed point becomes a function of the polynomials $p_i^k$:

$$f^* = f^*(p_1^k, \ldots, p_N^k)$$

Denote this space by

$$\mathfrak F := \{f^*(p_1^k, \ldots, p_N^k) \mid p_i^k \in \Pi^k[0, N]\}$$

???+ theorem
    The map

    $$
    \begin{align*}
        \Theta : (\Pi^k[0, N])^N &\to \mathfrak F^k[0, N] \\
    \end{align*}
    $$

    is a linear isomorphism.

    ??? proof
        === "Linearity"
            $\begin{align*}
                \text{Let } & p^k, q^k \in (\Pi^k[0, N])^N \\
                & \alpha \in \R
            \end{align*}$

            Then, $\alpha p^k + q^k \in (\Pi^k[0, N])^N$, and

            $$
            \begin{align*}
                (1) && f^*(\alpha p^k + q^k) &= \sum_{i=1}^{N} (\alpha p_i^k + q_i^k) \circ u_i^{-1} \Chi_{I_i} + \sum_{i=1}^{N} L_i(f^*(\alpha p^k + q^k) \circ u_i^{-1}) \Chi_{I_i} \\
                (2) && \alpha f^*(p^k) + f^*(q^k) &= \alpha T f^*(p^k) + T f^*(q^k) \\
                &&&= T(\alpha f^*(p^k) + f^*(q^k)) \\
                &&& \cdots \\
                &&& = \sum_{i=1}^{N} (\alpha p_i^k + q_i^k) \circ u_i^{-1} \Chi_{I_i} + \sum_{i=1}^{N} L_i f^*(\alpha p_i^k + q_i^k) \circ u_i^{-1} \Chi_{I_i}
            \end{align*}
            $$

            So $(1) = (2)$, and by the uniqueness of the fixed point,
            $f^*(\alpha p^k + q^k) = \alpha f^*(p^k) + f^*(q^k)$.

        === "Injectivity"
            $$f^*(p^k) = 0 \iff p^k = 0$$

        === "Surjectivity"
            Let $f^* \in \mathfrak F^k[0, N]$, and focus on $I_i$:

            $$f^* \circ u_i = p_i^k + L_i f^*$$

            So, let $p_i^k := f^* \circ u_i - L_i f^*$. Then, $f^* = f^*(p_1^k, \ldots, p_N^k)$.


???+ example "Example: Special case for $k=2$"
    Let $Y=\{(\nu, y_\nu) \mid \nu \in \{1, \dots, N\}\}$. Then, $p^2 \in (\Pi^2[0, N])^N$ depends
    uniquely on $Y$:

    - $N+1$ interpolation points
    - $N$-tuple of affine functions: $2N$ parameters, $N-1$ join-up conditions
    - $2N-(N-1) = N+1$ free parameters

    So, $\dim \mathfrak F^2[0, N] = N+1$.


???+ proposition
    Each $f^* \in \mathfrak F^2[0, N]$ can be written uniquelly in the form

    $$f^* = \sum_{\nu = 0}^{N} y_\nu e_\nu^*$$

    where $e_\nu^* \in \mathfrak F^2[0, N]$ s.t. $e_\nu^*(\nu) = 1$ and $e_\nu^*(\mu) = 0$.
    
    
    