# 6.2 Regularity

???+ theorem "Theorem 6.11"
    ## Interior H²-regularity <a id="t611"></a>

    $\begin{align*}
        \text{Assume } & a^{ij} \in C^1(\Omega) \\
        & b^i,c \in L^{\infty}(\Omega) \\
        & f \in L^2(\Omega)
    \end{align*}$

    Let $u \in H^1(\Omega)$ be a weak solution of $Lu = f$ in $\Omega$.

    $$
    \implies\left\{\begin{align*}
        u & \in H_{\text{loc}}^2(\Omega) \\
        \|u\|_{H^2(\Omega')} & \le C\left(\|f\|_{L^2(\Omega)} + \|u\|_{L^2(\Omega)}\right)
        & \forall\, \Omega' \Subset \Omega
    \end{align*}\right.
    $$

    for $C = C(\Omega', \Omega, L)$.


???+ remark "Remark 6.12"
    It is important to note that if $u\in H_{\text{loc}}^2(\Omega)$ solves $Lu = f$ in
    $\Omega$, then $u$ solves it a.e. in $\Omega$.

    In fact, for all $v \in C_c^{\infty}(\Omega)$, we have

    $$B[u, v] = \inner{f}{v}$$

    Furthermore, integrating by parts in $B[u,v]$, one can can get

    $$B[u, v] = \inner{Lu}{v}$$

    Combining these, we get

    $$\inner{Lu - f}{v} = 0 \quad \forall\, v \in C_c^{\infty}(\Omega)$$


???+ theorem "Theorem 6.13"
    ## Infinite differentiability in the interior <a id="t613"></a>

    Assume tha $a^{ij}, b^i, c, f \in C^\infty(\Omega)$ and $u\in H^1(\Omega)$ is a weak
    solution of $Lu = f$ in $\Omega$.

    $$\implies u \in C^\infty(\Omega)$$


???+ remark "Remark 6.14"
    Under additional regularity assumptions on the coefficients of $L$ at the boundary and
    under additional assumptions on the regularity of the boundary, we can push the regularity
    of $u$ in the theorems above to the boundary of $\Omega$.