# 5.2 Sobolev Spaces as function spaces


??? lemma "Lemma 5.10"
    <a id="l510"></a>
    
    $$\|\cdot\|_{W^{k,p}(\Omega)} \text{ is a norm on } W^{k,p}(\Omega)$$

    ??? proof
        Homogeneity and positiveness are clear. For $p = \infty$, the triangle inequality
        follows from the definition of $\operatorname{ess-sup}$ and the triangle inequality for the
        absolute value.

        Let $1 \le p < \infty$. Applying the Minkowski inequality $(MI)$ twice, one for
        integrals and one for sums, we get

        $$
        \begin{align*}
            \|u + v\|_{W^{k,p}(\Omega)}
            =& \left(\sum_{|\alpha| \le k} \|D^\alpha(u + v)\|_{L^p(\Omega)}^p\right)^{1/p} \\
            \overset{MI}{\le}& \left(\sum_{|\alpha| \le k} \left(\|D^\alpha u\|_{L^p(\Omega)}
            + \|D^\alpha v\|_{L^p(\Omega)}\right)^p\right)^{1/p} \\
            \overset{MI}{\le}& \left(\sum_{|\alpha| \le k} \|D^\alpha u\|_{L^p(\Omega)}^p\right)^{1/p}
            + \left(\sum_{|\alpha| \le k} \|D^\alpha v\|_{L^p(\Omega)}^p\right)^{1/p} \\
            =& \|u\|_{W^{k,p}(\Omega)} + \|v\|_{W^{k,p}(\Omega)}
        \end{align*}
        $$


??? theorem "Theorem 5.11"
    ## Sobolev Spaces are Banach Spaces

    $$W^{k,p}(\Omega) \text{ is a Banach space } \forall\, k\in\N, 1 \le p \le \infty$$

    ??? proof
        Let $\{u_k\}_{k\in\N} \subset W^{k,p}(\Omega)$ be a Cauchy sequence.

        $$\forall\, \varepsilon > 0\,\exists\, N(\varepsilon)\,\forall\, m,n \ge N : 
        \left(\sum_{|\alpha| \le k} \|D^\alpha u_m - D^\alpha u_n\|_{L^p(\Omega)}^p\right)^{1/p} < \varepsilon$$

        $\begin{align*}
            & \implies \{D^\alpha u_k\}_{k\in\N} \text{ is a Cauchy sequence in } L^p(\Omega) \\
            & \implies \exists\, u_\alpha \in L^p(\Omega) : D^\alpha u_k \to u_\alpha \text{ in } L^p(\Omega) \\
        \end{align*}$

        Let $\phi \in C_c^\infty(\Omega)$.

        $\begin{align*}
            \implies \int_\Omega u_0 D^\alpha \phi \, dx
            &= \lim_{k\to\infty} \int_\Omega u_k D^\alpha \phi \, dx \\
            &= \lim_{k\to\infty} (-1)^{|\alpha|} \int_\Omega D^\alpha u_k \phi \, dx \\
            &= (-1)^{|\alpha|} \int_\Omega u_\alpha \phi \, dx            
        \end{align*}$

        $\begin{align*}
            & \implies D^\alpha u_k \to D^\alpha u_0 &\text{ in } L^p(\Omega) \\
            & \implies u_k \to u_0 \text{ in } W^{k,p}(\Omega)
        \end{align*}$


## Approximation with regular functions

Let $\Omega_\varepsilon := \{x \in \Omega \mid \dist(\Omega^c, x) > \varepsilon\}$.

??? theorem "Theorem 5.12"
    ### Local approximation <a id="t512"></a>

    $\begin{align*}
        \text{Let } & 1 \le p < \infty \\
        & u \in W^{k,p}(\Omega) \\
        & u^\varepsilon = \nu_\varepsilon * u \text{ in } \Omega_\varepsilon
    \end{align*}$

    $$
    \begin{align*}
        (1) & \quad u^\varepsilon \in C^\infty(\Omega_\varepsilon) & \varepsilon > 0 \\ \\
        (2) & \quad u^\varepsilon \to u & \text{ in } W^{k,p}(\Omega)
    \end{align*}
    $$

    ??? proof
        === "$(1)$"
            See [T.2.10](../../2_Laplace_and_poisson_equation/3_regularity#t210).

        === "$(2)$"
            ??? proof "Claim: $D^\alpha u^\varepsilon = \nu_\varepsilon * D^\alpha u$"
                Note that

                $$
                \begin{align*}
                    (*) && x & \mapsto \nu_\varepsilon(x - y) u(y) \in L^1(\Omega)
                    & \text{ for a.e. } x \in \Omega_\varepsilon \\
                    (**) && y & \mapsto \nu_\varepsilon(x - y) u(y) \in C_c^\infty(\Omega_\varepsilon)
                    & \text{ for a.e. } y \in \Omega
                \end{align*}
                $$

                $$
                \begin{align*}
                    \implies D^\alpha u^\varepsilon(x)
                    =& D^\alpha \left(\int_{\Omega} \nu_\varepsilon(x - y) u(y) \, dy\right) \\
                    \overset{(*)}{=}& \int_{\Omega} D^\alpha_x \nu_\varepsilon(x - y) u(y) \, dy \\
                    =& (-1)^{|\alpha|} \int_{\Omega} D^\alpha_y \nu_\varepsilon(x - y) u(y) \, dy \\
                    \overset{(**)}{=}& \int_{\Omega} \nu_\varepsilon(x - y) D^\alpha u(y) \, dy \\
                    =:& (\nu_\varepsilon * D^\alpha u)(x)
                \end{align*}
                $$

            Let $V \Subset \Omega$.

            $$
            \begin{align*}
                & \implies D^\alpha u^\varepsilon \to D^\alpha u \text{ in } L^p(V) \quad \forall\, |\alpha| \le k \\
                & \implies \|u^\varepsilon - u\|_{W^{k,p}(V)} \to 0
            \end{align*}
            $$


??? theorem "Theorem 5.13"
    ### Global approximation <a id="t513"></a>

    $\begin{align*}
        \text{Let } & \Omega \subseteq \R^n \text{ be bounded} \\
        & 1 \le p < \infty \\
        & u \in W^{k,p}(\Omega)
    \end{align*}$

    $$
    \begin{align*}
        \implies \exists\, \{&u_k\}_{k\in\N} \subset C^\infty(\Omega) \cap W^{k,p}(\Omega) \text{ s.t. } \\
        &u_k \to u \quad \text{ in } W^{k,p}(\Omega)
    \end{align*}
    $$

    ??? proof
        **From global to local via partition of unity**

        Define $\Omega_i := \{x \in \Omega \mid \dist(\Omega^c, x) > \frac{1}{i}\}$.

        $\begin{cases}
            \Omega_i \subset \Omega_{i+1} \\
            \Omega = \bigcup_{i=1}^\infty \Omega_i
        \end{cases}$

        Further, define $V_i := \Omega_{i+3} \setminus \overline \Omega_{i+1}$, and choose
        $V_0 \Subset \Omega$ open s.t. $\{V_i\}$ covers $\Omega$. Let $\{\xi_i\}_i^\infty$
        be a partition of unity subordinate to $\{V_i\}$:

        $$
        \left\{\begin{align*}
            &\xi_i \in C_c^\infty(V_i) \\
            &0 \le \xi_i \le 1 \\
            &\sum_{i=0}^\infty \xi_i = 1
        \end{align*}\right.
        $$

        $\implies \begin{cases}
            \xi_i u \in W^{k,p}(\Omega) \\
            \Supp(\xi_i u) \subset V_i
        \end{cases} \quad \forall i \in \N$

        **Make use of local approximation result**

        Fix $\delta > 0$. By [T.5.12](#t512), we can choose $\varepsilon_i > 0$ s.t.
        $uî := \nu_{\varepsilon_i} * (\xi_i u)$ satisfies

        $$
        \left\{\begin{align*}
            &\|u^i - \xi_i u\|_{W^{k,p}(\Omega)} < \frac{\delta}{2^{+1}} \\
            &\Supp(u^i) \subset W_i := \Omega_{i+4} \setminus \overline \Omega_{i} \supset V_i
        \end{align*}\right.
        $$

        **Taking the supremum**

        $\begin{align*}
            &\text{Let } v(x) := \sum_{i=0}^{\infty} u^i(x) \\
            & \implies \forall\, V \Subset \Omega : \text{ only finitely many terms are non-zero} \\
            & \implies v \in C^\infty(\Omega)
        \end{align*}$

        Additionally,

        $$u(x) = \sum_{i=0}^{\infty} \xi_i(x) u(x),$$

        so for all $V \Subset \Omega$,

        $$
        \begin{align*}
            \|v - u\|_{W^{k,p}(V)}
            &\le \sum_{i=0}^{\infty} \|\xi_i u - u^i\|_{W^{k,p}(\Omega)} \\
            &= \sum_{i=0}^{\infty} \|\xi_i u - u^i\|_{W^{k,p}(W_i)} \\
            &< \sum_{i=0}^{\infty} \frac{\delta}{2^{+1}} \\
            &= \delta
        \end{align*}
        $$

        $$\implies \|v - u\|_{W^{k,p}(\Omega)} = \sup_{V \Subset \Omega} \|v - u\|_{W^{k,p}(V)} = \delta$$


??? theorem "Theorem 5.14"
    ### Approximation up to the boundary <a id="t514"></a>

    $\begin{align*}
        \text{Let } & \Omega \subseteq \R^n \text{ be bounded s.t.} \\
        & \partial \Omega \in C^1 \\
        & 1 \le p < \infty \\
        & u \in W^{k,p}(\Omega)
    \end{align*}$

    $$
    \begin{align*}
        \implies \exists\, \{&u_k\}_{k\in\N} \subset C^\infty(\overline \Omega) \text{ s.t. } \\
        & u_k \to u \quad \text{ in } W^{k,p}(\Omega)
    \end{align*}
    $$
