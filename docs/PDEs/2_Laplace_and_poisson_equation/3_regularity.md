# 2.3 Regularity of Harmonic Functions

??? definition "Definition 2.7"
    ## Analytic function

    A function $u \in C^\infty(\Omega)$ is called **analytic** in $\Omega$ if

    $$\forall\ x_0 \in \Omega\ \exists\ r(x_0) > 0 : \text{ The Taylor expansion of } u
    \text{ converges pointwise in } B(x_0, r(x_0))$$

??? definition "Definition 2.8"
    ## Mollifier

    The function $\eta \in C_c^\infty(\R^n)$ is called a **mollifier** in $\R^n$ if

    $$\int_{\R^n} \eta(x) \, dx = 1$$

    **Standard Radial Mollifier**:

    $$\eta(x) =
    \begin{cases}
        c_n \exp\left(-\frac{1}{1 - |x|^2}\right) & |x| < 1 \\
        0 & |x| \geq 1
    \end{cases}$$

    The function $\eta_\varepsilon(x) := \frac{1}{\varepsilon^n}\eta\left(\frac{x}{\varepsilon}\right)$
    is a mollifier with support on $\overline{B(0, \varepsilon)}$.

    The convolution with a molliﬁer is called a **mollification**.

??? definition "Definition 2.9"
    ## Mollification

    Let $f \in L_{\text{loc}}^1(\Omega)$. The **mollification** of $f$ is the function

    $$f^\varepsilon(x) := \eta_\varepsilon(x) * f(x) \quad \forall\ x \in \Omega_\varepsilon:= \{x \in \Omega \mid d(x, \partial \Omega) > \varepsilon\}$$


??? theorem "Theorem 2.10"
    ## Properties of mollifiers <a id="t210"></a>

    $$
    \begin{align*}
        & (1) && f^\varepsilon \in C^\infty(\Omega_\varepsilon) \\
        & (2) && f^\varepsilon \to f \text{ a.e. on } \Omega \\
        & (3) && f \in C(\Omega) \implies f^\varepsilon \to f \text{ uniformly on all compact subset } K \subset \Omega \\
        & (4) && 1 \le p < \infty \land f \in L^p_{\text{loc}}(\Omega) \implies f^\varepsilon \to f \text{ in } L^p_{\text{loc}}(\Omega)
    \end{align*}
    $$

    !!! proof "Proof: Omitted"
    
??? theorem "Theorem 2.11"
    ## Smoothness of Harmonic Functions <a id="t211"></a>

    Let $u \in C(\Omega)$ satisfying [MVP](../2_mean_value_props/#t23).

    $$\implies u \in C^\infty(\Omega)$$

    ??? proof
        Let $\eta$ be the standard radial mollifier.

        $$\implieshref{t211}{T.2.11} u^\varepsilon \in C^\infty(\Omega_\varepsilon)$$

        Let $x \in \Omega_\varepsilon$.

        $$
        \begin{align*}
            \implies u^\varepsilon(x) &= \int_\Omega \eta_\varepsilon(x - y)u(y) \, dy \\
            &= \frac{1}{\varepsilon^n} \int_\Omega \eta\left(\frac{x-y}{\varepsilon}\right)u(y) \, dy \\
            &= \frac{1}{\varepsilon^n} \int_0^\varepsilon
            \left(\int_{\partial B(x, r)} \eta\left(\frac{x-y}{\varepsilon}\right) u(y) \, d\s(y)\right) \, dr \\
            &= \frac{1}{\varepsilon^n} \int_0^\varepsilon \eta\left(\frac{r}{\varepsilon}\right)
            \left(\int_{\partial B(x, r)} u(y) \, d\s(y)\right) \, dr \\
            &= u(x) \int_{B(0, 1)} \eta(x) \, dx \\
            &= u(x)
        \end{align*}
        $$

        So $u^\varepsilon \equiv u$ on $\Omega_\varepsilon$.


??? theorem "Theorem 2.12"
    ## Estimates on derivatives of a harmonic function <a id="t212"></a>

    Let $u \in C(\Omega)$ be harmonic.

    $$\implies |D^\alpha u(x_0)| \leq \frac{C_{|\alpha|}}{r^{|\alpha|+n}} \|u\|_{L^1(B(x_0, r))} \quad \forall\ B(x_0, r) \subset \Omega$$

    where $C_0 = \frac{1}{\alpha(n)}$ and $C_k = \frac{(2^{n+1}n k)^k}{\alpha(n)}$

    ??? proof
        === "$|\alpha| = 0$"
            By the mean value property ([MVP](../2_mean_value_props/#t23)), we have

            $$
            \begin{align*}
                u(x_0) &= \fint_{B(x_0, r)} u(y) \, dy \\
                &= \frac{1}{\alpha(n)r^n} \int_{B(x_0, r)} u(y) \, dy \\
                |u(x_0)| &\leq \frac{C_0}{r^n} \|u\|_{L^1(B(x_0, r))}
            \end{align*}
            $$

        === "$|\alpha| = 1$"
            By [T.2.11](#t211), we have $u \in C^\infty(\Omega)$. In addition,
            $0 = \partial_{x_i}(\Delta u) = \Delta(\partial_{x_i}u)$, so $\partial_{x_i} u$ is harmonic.
            Thus, by [MVP](../2_mean_value_props/#t23), we have

            $$
            \begin{align*}
                \partial_{x_i}u(x_0) &= \fint_{B(x_0, r/2)} \partial_{x_i}u(y) \, dy \\
                &= \left(\frac{2}{r}\right)^n \frac{1}{\alpha(n)} \int_{\partial B(x_0, r/2)} u \cdot \nu_i \, d\s
            \end{align*}
            $$

            Then, by the [M.P.](../2_mean_value_props/#t25), we get

            $$
            \begin{align*}
                |\partial_{x_i}u(x_0)| &\leq \left(\frac{2}{r}\right)^n \frac{1}{\alpha(n)} |\partial B(x_0, r/2)| \|u\|_{L^\infty(B(x_0, r/2))} \\
                &= \frac{2n}{r} \|u\|_{L^\infty(B(x_0, r/2))}
            \end{align*}
            $$

            From $|\alpha| = 0$, we have

            $$
            \begin{align*}
                |u(x)| &\leq \frac{1}{\alpha(n)} \left(\frac{2}{r}\right)^n \|u\|_{L^2(B(x_0, r/2))} \\
                &\leq \frac{1}{\alpha(n)} \left(\frac{2}{r}\right)^n \|u\|_{L^1(B(x_0, r))} \\
            \end{align*}
            $$

            for all $x \in B(x_0, r/2)$.

            $\begin{align*}
                & \implies \|u\|_{L^\infty(B(x_0, r/2))} \leq \frac{1}{\alpha(n)} \left(\frac{2}{r}\right)^n \|u\|_{L^1(B(x_0, r))} \\
                & \implies |\partial_{x_i}u(x_0)| \leq \frac{n 2^{n+1}}{\alpha(n) r^{n+1}} \|u\|_{L^1(B(x_0, r))} \\
                & \implies |D^\alpha u(x_0)| \leq \frac{n 2^{n+1}}{\alpha(n) r^{n+1}} \|u\|_{L^1(B(x_0, r))}
            \end{align*}$

        === "$|\alpha| > 1$"
            Fix any $B(x_0, r) \subset \Omega$ and choose $\beta \in \N_0^n$ such that

            $$
            \begin{cases}
                |\beta| = |\alpha| - 1 \\
                D^\alpha u(x) = \partial_{x_i}D^\beta u(x)
            \end{cases}
            $$

            By induction, we have

            $$
            \begin{align*}
                |D^\beta u(x)| &\leq \frac{\left(2^{n+1}n|\beta|\right)^{|\beta|}}{\alpha(n)}
                \left(\frac{|\alpha|}{|\beta|r}\right)^{|\beta|+n} \|u\|_{L^1(B(x, \frac{|\beta|}{|\alpha|}r))} \\
                & \le \frac{\left(2^{n+1}n|\beta|\right)^{|\beta|}}{\alpha(n)}
                \left(\frac{|\alpha|}{|\beta|r}\right)^{|\beta|+n} \|u\|_{L^1(B(x_0, r))}
            \end{align*}
            $$

            for all $x \in B(x_0, r/|\alpha|)$. Using this, and the same arguments as in the
            case $|\alpha| = 1$, we have

            $$
            \begin{align*}
                |D^\alpha u(x_0)| &\le \frac{n |\alpha|}{r} \|D^\beta u\|_{L^\infty B(x_0, r/|\alpha|)} \\
                &\le \frac{n |\alpha|}{r} \frac{\left(2^{n+1}n|\beta|\right)^{|\beta|}}{\alpha(n)}
                \left(\frac{|\alpha|}{|\beta|r}\right)^{|\beta|+n} \|u\|_{L^1(B(x_0, r))} \\
                &= \frac{C_{|\alpha|}}{r^{|\alpha|+n}} \|u\|_{L^1(B(x_0, r))}
            \end{align*}
            $$


??? theorem "Theorem 2.13"
    ## Analyticity of Harmonic Functions <a id="t213"></a>

    $$ \Delta u = 0 \text{ in } \Omega \implies u \text{ is analytic in } \Omega$$

    ??? proof
        $\begin{align*}
            \text{Let } & r:= \frac{1}{4} \dist(x_0, \partial \Omega) \\
            & M:= \frac{1}{\alpha(n) r^n} \|u\|_{L^1(B(x_0, 2r))}
        \end{align*}$

        By [T.2.11](#t211), we have $u \in C^\infty(\Omega)$.

        $\begin{align*}
            \implies& u \text{ is bounded in } \overline{B(x_0, 2r)} \subset \Omega \\
            \implies& M < \infty
        \end{align*}$

        So by [T.2.12](#t212), we have for all $x \in B(x_0, r)$

        $$|D^\alpha u(x)| \leq\frac{\left(2^{n+1}n\right)^{|\alpha|}|\alpha|^{|\alpha|}}{r^{|\alpha|}}
        \frac{1}{r^n} \frac{1}{\alpha(n)} \|u\|_{L^1(B(x_0, r))} \quad (1)$$

        In addition, we have the following two inequalities:

        $$
        \begin{align*}
            \frac{k^k}{k!} < e^k \implies |\alpha|^{|\alpha|} & \leq e^{|\alpha|}|\alpha|! & (2) \\
            |\alpha|! & \leq n^{|\alpha|} \alpha! & (3)
        \end{align*}
        $$

        Combining $(1)$, $(2)$, and $(3)$, we get

        $$\|D^\alpha u\|_{L^\infty(B(x_0, r))} \leq M \left(\frac{2^{n+1}n^2e}{r}\right)^{|\alpha|} \alpha!$$

        We claim that the Taylor expansion of $u$ centered at $x_0$ converges for
        $|x-x_0| < \frac{r}{2^{n+2}n^3e}$:

        $$
        \begin{align*}
            R_N(x) &:= u(x) - \sum_{k=0}^{N-1} \sum_{|\alpha| = k} \frac{D^\alpha u(x_0)}{\alpha!}(x-x_0)^\alpha \\
            &= \sum_{|\alpha| = N} \frac{D^\alpha u(x_0 + t\cdot(x-x_0))}{\alpha!}(x-x_0)^\alpha \\
        \end{align*}
        $$

        for some $t = t(x) \in [0, 1]$. This results in

        $$
        \begin{align*}
            \implies |R_N(x)| &\leq \sum_{|\alpha| = N} \|D^\alpha u\|_{L^\infty(B(x_0, r))} \frac{1}{\alpha!} \prod_{i=1}^{n} |(x-x_0)_i|^{\alpha_i} \\
            &\leq \sum_{|\alpha| = N} \|D^\alpha u\|_{L^\infty(B(x_0, r))} \frac{1}{\alpha!} |x-x_0|^{|\alpha|} \\
            &\leq \sum_{|\alpha| = N} M \left(\frac{2^{n+1}n^2e}{r}\right)^N |x-x_0|^N \\
            &\leq M n^N \left(\frac{2^{n+1}n^2e |x-x_0|}{r}\right)^N \\
            &\leq \frac{n M}{2^N} \to 0
        \end{align*}
        $$

        where we have used that

        $$\sum_{|\alpha| = N} 1 \le (N+1)^n < n^N$$

        for large enough $N$.


??? theorem "Theorem 2.14"
    ## Liouville's Theorem <a id="t214"></a>

    $$u : \R^n \to \R \text{ is harmonic and bounded} \implies u \text{ is constant}$$

    ??? proof
        Fix any $x_0 \in \R^n$ and $r > 0$. Then, in $B(x_0, r)$, we have

        $$
        \begin{align*}
            |Du(x_0)| =& \left(\sum_{i=1}^{n}|\partial_{x_i}u(x_0)|^2\right)^{1/2} \\
            \oversethref{#t212}{T.2.1.2}{\le}&\frac{\sqrt n}{r^{n+1}} C_1 \|u\|_{L^1(B(x_0, r))} \\
            \leq& \frac{\sqrt n}{r^{n+1}} C_1 \alpha(n) r^n \|u\|_{L^\infty(B(x_0, r))} \\
            =& \frac{\sqrt n}{r} C_1 \alpha(n) \|u\|_{L^\infty(\R^n)} \\
            \le& \frac{C}{r} \to 0
        \end{align*}
        $$

        so $u(x_0)$ is constant.


??? theorem "Theorem 2.15"
    ## Representation formula for the Poisson equation <a id="t215"></a>

    Let $f\in C_c^2(\R^n), n \ge 3$. Then, any bounded solution $u$ of the Poisson equation in $\R^n$
    has the form

    $$u(x) = \int_{\R^n} \Phi(x-y)f(y) \, dy + c, \quad c \in \R.$$

    ??? proof
        Define the function $\tilde u$ by

        $$\tilde u(x) := \int_{\R^n} \Phi(x-y)f(y) \, dy.$$

        We have already shown in [T.2.2](../1_sol_lap_poiss_eq/#t22) that $\tilde u$ solves the
        Poisson equation. It remains to show that $\tilde u$ is bounded and that any other solution
        $u$ of the Poisson equation is of the form $u = \tilde u + c$:

        === "Bounded"
            As $\tilde u \in C^2(\R^n)$, we only need to show that $\tilde u$ is bounded as
            $|x| \to +\infty$.

            Let $R > 0$ be such that $\Supp f \subset B(0, R)$.

            $$
            \begin{align*}
                \implies |\tilde u(x)| &= \left|\int_{\R^n} \Phi(x-y)f(y) \, dy\right| \\
                &\le \int_{B(0, R)} |\Phi(x-y) f(y)| \, dy \\
                &\le c \|f\|_{L^\infty(\R^n)} \int_{B(0, R)} \frac{1}{|x-y|^{n-2}} \, dy \\
                & \le c \|f\|_{L^\infty(\R^n)} |B(0, R)| ||x|-R|^{2-n} \to 0
            \end{align*}
            $$

            So $\tilde u$ is bounded.

        === "$u = \tilde u + c$"
            Let $w:=u-\tilde u$.

            $\begin{align*}
                \implies& w \text{ is harmonic and bounded} \\
                \implieshref{#t214}{T.2.14}& w \text{ is constant} \\
                \implies& u = \tilde u + c \quad \text{for some } c \in \R
            \end{align*}$


??? corollary "Corollary 2.16"
    ## Uniqueness of the Poisson equation <a id="c216"></a>

    Let $f\in C_c^2(\R^n), n \ge 3$.

    $$\implies u(x) = \int_{\R^n} \Phi(x-y)f(y) \, dy \text{ is the unique solution in } C_0^2(\R^n)$$
