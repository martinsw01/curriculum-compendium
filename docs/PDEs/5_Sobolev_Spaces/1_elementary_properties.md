# 5.1 Elementary properties of Sobolev Spaces

??? definition "Definition 5.1"
    ## Weak partial derivative

    $\begin{align*}
        \text{Let } & u, v \in L_{\text{loc}}^1(\Omega) \\
        & \alpha \text{ be a multi-index} \\
    \end{align*}$

    $v$ is the $\bm\alpha$**-th weak derivative** of $u$ if and we write $D^\alpha u = v$ if
    
    $$\int_\Omega u D^\alpha \phi \, dx = (-1)^{|\alpha|} \int_\Omega v \phi \, dx \quad \forall \phi \in C_c^\infty(\Omega)$$

    
??? remark "Remark 5.2"
    Strong derivatives are weak derivatives. Let $u \in C^k(\Omega)$, then by integration by
    parts, we have

    $$\int_\Omega u D^\alpha \phi \, dx = (-1)^{|\alpha|} \int_\Omega v \phi \, dx$$


??? remark "Remark 5.3"
    If it exists, the weak derivative is unique up to sets of measure zero.


??? lemma "Lemma 5.4"
    ## Du Bais-Raymond Lemma

    $\begin{align*}
        \text{Let } & g \in L_{\text{loc}}^1(\Omega) :
        \int_\Omega g \phi \, dx = 0 \quad
        \forall\,\phi \in C_c^\infty(\Omega).
    \end{align*}$

    $$\implies g = 0 \text{ a.e. in } \Omega$$

    ??? proof
        $\begin{align*}
            \text{Let } & \phi^\varepsilon \text{ be the standard mollifiers} \\
            & g^\varepsilon = g * \phi^\varepsilon \\
            & y \in \Omega : \dist(y, \Omega^c) \ge 2\varepsilon
        \end{align*}$

        $\begin{align*}
            & \implies x \mapsto \phi^\varepsilon(x - y) \in C_c^\infty(\Omega) \\
            & \implies g^\varepsilon(y) = \int_\Omega g(x) \phi^\varepsilon(x - y) \, dx = 0
        \end{align*}$

        We know that $g^\varepsilon \to g$ in $L^1_{\text{loc}}(\Omega)$. Further, let
        $U_{\varepsilon_0, R} := \{y \in B(0, R) \mid \dist(y, \Omega^c) \ge 2\varepsilon_0\}$.
        
        $\begin{align*}
            & \implies \int_{U_{\varepsilon_0, R}} |g^\varepsilon(y) - g(y)| \, dy \xrightarrow{\varepsilon \to 0} 0 \\
            & \implies \int_{U_{\varepsilon_0, R}} |g(y)| \, dy = 0
        \end{align*}$

        $R, \varepsilon_0$ was chosen arbitrarily, so $g = 0$ a.e. in $\Omega$.


??? example "Example 5.4"
    === "Heaviside function is a weak derivative"
        $\begin{align*}
            \text{Let } & \Omega = (0, 2) \\
            & u(x) = \begin{cases}
                x, & x \in (0, 1] \\
                1, & x \in (1, 2)
            \end{cases} \\
            & v(x) = \H(1-x) \text{ be the Heaviside function}
        \end{align*}$
    
        $$
        \begin{align*}
            \implies \int_0^2 u \phi' \, dx &= \int_0^1 x \phi' \, dx + \int_1^2 \phi' \, dx \\
            &= [x\phi(x)]_0^1 - \int_0^1 \phi \, dx + [\phi(x)]_1^2 \\
            &= \int_0^1 \phi \, dx \\
            &= \int_0^2 v \phi \, dx
        \end{align*}
        $$

    === "Non-existence of a weak derivative"
        $\begin{align*}
            \text{Let } & \Omega = (0, 2) \\
            & u(x) = \begin{cases}
                x, & x \in (0, 1] \\
                2-x, & x \in (1, 2)
            \end{cases}
        \end{align*}$
    
        Assume $\exists\, v \in L_{\text{loc}}^1(\Omega)$ s.t.

        $$\int_0^2 u \phi' \, dx = \int_0^2 v \phi \, dx \quad \forall\, \phi \in C_c^\infty(\Omega)$$

        $$
        \begin{align*}
            \implies \int_0^2 u \phi' \, dx
            &= \int_0^1 x \phi' \, dx + \int_1^2 2 \phi' \, dx \\
            &= [x\phi(x)]_0^1 - \int_0^1 \phi \, dx + [2\phi(x)]_1^2 \\
            &= -\phi(1) - \int_0^1 \phi \, dx \\
            &\overset{?}{=} \int_0^2 v \phi \, dx
        \end{align*}
        $$

        Let $(\phi_m)_{m\in\N} \subset C_c^\infty(\Omega)$ s.t. $0 \le \phi_m \le 1$,
        $\phi_m(1) = 1$ and $\phi_m \to 0$ for $x \neq 1$.

        $$
        \begin{align*}
            \implies \int_0^2 v \phi_m \, dx &= \phi_m(1) + \int_0^1 \phi_m \, dx \\
            &= 1 + \int_0^1 \phi_m \, dx
        \end{align*}
        $$

        $$\implies 1 = \lim_{m\to\infty} \left(\int_0^2 v\phi_m \, dx - \int_0^1 \phi_m \, dx\right)
        \overset{DCT}{=} 0 \quad \contradiction$$


??? definition "Definition 5.5"
    ## Sobolev Space

    For $1 \le p \le \infty$, we define the **Sobolev spaces**

    $$
    \begin{align*}
        W^{k,p}(\Omega) &:= \{f \in L^p(\Omega) \mid \exists\, D^\alpha f \in L^p(\Omega) \quad \forall\, |\alpha| \le k\} \\
        H^k(\Omega) &:= W^{k,2}(\Omega)
    \end{align*}
    $$


??? definition "Definition 5.6"
    ## Sobolev norm

    $$\|u\|_{W^{k,p}(\Omega)} :=
    \left\{\begin{align*}
        &\left(\sum_{|\alpha| \le k} \|D^\alpha u\|_{L^p(\Omega)}^p\right)^{1/p}, & 1 \le p < \infty \\ \\
        &\sum_{|\alpha| \le k} \esssup{\Omega} |D^\alpha u|, & p = \infty 
    \end{align*}\right.
    $$


??? definition "Definition 5.6"
    ## Convergence

    Let $u_n, u \in W^{k,p}(\Omega)$.

    $$
    \begin{align*}
        (1) &&\quad u_n \to u \text{ in } W^{k,p}(\Omega) \iff & \|u_n - u\|_{W^{k,p}(\Omega)} \to 0 \\
        (2) &&\quad u_n \to u \text{ in } W^{k,p}_{\text{loc}}(\Omega) \iff & \|u_n - u\|_{W^{k,p}(V)} \to 0 \quad \forall\, V \Subset \Omega 
    \end{align*}
    $$


??? definition "Definition 5.6"
    $$
    \begin{align*}
        W_0^{k,p}(\Omega) &:= \overline{C_c^\infty(\Omega)}^{\|\cdot\|_{W^{k,p}(\Omega)}} \\
        H_0^k(\Omega) &:= W_0^{k,2}(\Omega)
    \end{align*}
    $$


## Characterization in 1D

Let $\Omega \subset \R$ be an interval.

$$u \in W^{1,p}(\Omega) \iff \exists\, v \in AC(\Omega) : u = v \text{ a.e. in } \Omega, v' \in L^p(\Omega)$$

## Higher dimensions

There are unbounded Sobolev functions in bounded sets.

??? example "Example 5.7"
    $\begin{align*}
        \text{Let } & \Omega = B(0, 1) \subset \R^n, n > 1 \\
        & u(x) = \frac{1}{|x|^\gamma} \text{ on } \Omega \setminus \{0\}
    \end{align*}$

    Then, $u \in C^\infty(\Omega \setminus \{0\})$ and has classical derivatives

    $$
    \begin{align*}
        u_{x_i} &= \frac{-\gamma x_i}{|x|^{2+\gamma}} \\
        \implies |Du(x)| &= \frac{\gamma}{|x|^{1+\gamma}}
    \end{align*}
    $$

    $\begin{align*}
        \text{Let } & \phi \in C_c^\infty(\Omega) \\
        & \varepsilon > 0
    \end{align*}$

    $$\implies \int_{\Omega \setminus B(0, \varepsilon)} u \phi_{x_i} \, dx
    = -\int_{\Omega \setminus B(0, \varepsilon)} u_{x_i} \phi \, dx
    + \int_{\partial B(0, \varepsilon)} u \phi \nu_i \, d\s$$

    Suppose $\gamma + 1 < n$

    $$
    \begin{align*}
        \implies & |Du(x)| = \frac{|\gamma|}{|x|^{1+\gamma}} \in L^1(\Omega) \\
        \overset{\text{DCT}}{\implies} &
        \left\{\begin{aligned}
            &\int_{\Omega \setminus B(0, \varepsilon)} u \phi_{x_i} \, dx
            \to \int_{\Omega} u \phi_{x_i} \, dx \\
            &\int_{\Omega \setminus B(0, \varepsilon)} u_{x_i} \phi \, dx
            \to \int_{\Omega} u_{x_i} \phi \, dx
        \end{aligned}\right.
    \end{align*}
    $$

    Additionally,

    $$
    \begin{align*}
        \left|\int_{\partial B(0, \varepsilon)} u \phi \nu_i \, d\s\right|
        & \le \|\phi\|_\infty \int_{\partial B(0, \varepsilon)} \varepsilon^{-\gamma} \, d\s \\
        &= C \|\phi\|_\infty \varepsilon^{n-\gamma-1} \to 0
    \end{align*}
    $$

    So, for $0 \le \gamma < n-1$, this results in

    $$\int_\Omega u \phi_{x_i} \, dx = -\int_\Omega u_{x_i} \phi \, dx$$

    Moreover, we have

    $$|Du(x)| = \frac{|\gamma|}{|x|^{1+\gamma}} \in L^p(\Omega) \iff (\gamma + 1)p < n
    \implies \gamma < \frac{n-p}{p} \le n - p$$

    So we end up with

    $$
    \begin{align*}
        u \in W^{1,p}(\Omega) &\iff \gamma < \frac{n-p}{p} \\
        u \notin W^{1,p}(\Omega) & \text{ for } p \ge n
    \end{align*}
    $$


## Discontinuity

Discontinuity may appear at many points.

??? example "Example 5.8"
    $\begin{align*}
        \text{Let } & \{r_k\}_{k\in\N} = \Q^n \cap B(0, 1) \\
        & u(x) = \sum_{k=1}^\infty 2^{-k} |x - r_k|^{-\gamma}
    \end{align*}$

    $$
    \begin{align*}
        \gamma < \frac{n-p}{p} &\implies u \in W^{1,p}(B(0, 1)) \\
        \gamma > 0 &\implies u \text{ is unbounded for all open subsets of } B(0, 1)
    \end{align*}
    $$


## Elementary properties

??? theorem "Theorem 5.9"
    <a id="t59"></a>
    $\begin{align*}
        \text{Let } & u, v \in W^{k,p}(\Omega) \\
        & \|\alpha| \le k
    \end{align*}$

    $$
    \begin{align*}
        (1) & \quad
        \begin{aligned}
            &D^\alpha u \in W^{k-|\alpha|, p}(\Omega) \\
            &D^\beta(D^\alpha u) = D^{\alpha+\beta} u \quad \forall\, \beta : |\beta| + |\alpha| \le k
        \end{aligned} \\ \\
        (2) & \quad
        \begin{rcases}
            \lambda u + \mu v \in W^{k,p}(\Omega) \\
            D^\alpha(\lambda u + \mu v) = \lambda D^\alpha u + \mu D^\alpha v
        \end{rcases} \quad \forall\, \lambda, \mu \in \R \\ \\
        (3) & \quad V \subseteq \Omega \text{ open} \implies u \in W^{k,p}(V) \\ \\
        (4) & \quad \nu \in C_c^\infty(\Omega) \implies
        \left\{\begin{aligned}
            &\nu u \in W^{k,p}(\Omega) \\
            &D^\alpha(\nu u) = \sum_{\beta \le \alpha} \binom{\alpha}{\beta} D^\beta \nu D^{\alpha-\beta} u
        \end{aligned}\right.
    \end{align*}
    $$