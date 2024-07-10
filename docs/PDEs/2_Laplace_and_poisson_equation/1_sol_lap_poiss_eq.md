# 2.1 Solution of the Laplace and Poisson equation

??? definition "Definition 2.1"
    ## Harmonic function

    $$u \in C^2(\Omega) \text{ s.t. } \Delta u = 0$$

??? example "Example: What does $\Delta u = 0$ model?"
    $\begin{align*}
        \text{Let } & u : \R^3 \to \R \text{ be the chemical consentration of a substance in} \\
        & U \subseteq \R^3 \\
        & V \subseteq U \text{ be a subregion in equilibrium}
    \end{align*}$

    Then, the net flux in $V$ is zero. Let $F : U \to \R^3$ denote the flux density.

    $$\int_{\partial V} F \cdot \nu \, dS = 0$$

    Then, by Gauss-divergence theorem, we have

    $$\int_V \div F \, dx = \int_{\partial V} F \cdot \nu \, dS = 0 \quad \forall\ V \subset U$$

    so $\div F = 0$ if $\forall x\in U$ there is equilibrium.

    By Fick's law of diffusion, which states that matter flows in the direction of smallest concentration:

    $$F = -a D u$$

    where $a>0$ is the diffusion constant. Then, we get

    $$\div F = 0 \implies \Delta u = 0$$


??? theorem "Theorem 2.2"
    ## Fundamental solution of the Laplace equation <a id="t22"></a>

    Let $\alpha(n) = \frac{\pi^{n/2}}{\Gamma\left(\frac{n}{2} + 1\right)}$ be the volume of the unit $n$-ball.
    Then, the **fundamental solution of the Laplace equation**

    $$
    \Phi(x) = \begin{cases}
        -\frac{1}{2\pi}\log|x| & n=2 \\
        \frac{1}{n(n-2)\alpha(n)}|x|^{2-n} & n\geq 3
    \end{cases}
    $$

    solves the Laplace equation in $\R^n\setminus\{0\}$.

    ??? proof
        Observe that $\Delta$ is invariant under rotation. Thus, we should look for our solutions in the class
        of radial functions.

        $\begin{align*}
            \text{Let } & x = (x_1, \dots, x_n) \in \R^n \\
            & r = |x| = \sqrt{x_1^2 + \dots + x_n^2} \\
        \end{align*}$

        Then, we have $v(r) = u(x)$ for some $v : [0, \infty) \to \R$. Note that

        $$
        \begin{rcases}
            \par{r^2}{x_i} &= 2x_i \\
            &=2 r \par{r}{x_i}
        \end{rcases}
        \implies \par{r}{x_i} = \frac{x_i}{r}
        $$

        and further that

        $$
        \begin{align*}
            \par{u}{x_i} &= \par{v}{r}\par{r}{x_i} = v' \frac{x_i}{r} \\
            \par{^2u}{x_i^2} &= \par{}{x_i}\left(v'\frac{x_i}{r}\right) \\
            &= v''\cdot \left(\frac{x_i}{r}\right)^2 + v'\cdot\left(\frac{1}{r} - \frac{x_i^2}{r^3}\right)
        \end{align*}
        $$

        This yields

        $$
        \begin{align*}
            \Delta u &= v''(r) \sum_{i=1}^{n} \frac{x_i^2}{r^2} + \frac{v'(r)}{r} \sum_{i=1}^{n} \left(1-\frac{x_i^2}{r^2}\right) \\
            &= v''(r) + \frac{n-1}{r}v'(r)
        \end{align*}
        $$

        Assume that $v$ is not constant.

        $\begin{align*}
            &\implies \frac{v''}{v1} = -\frac{n-1}{r} \\
            &\implies (\ln|v'|)' = \left(\ln r^{1-n}\right)' \\
            &\iff v' = \frac{a}{r^{n-1}} \quad a\in \R \\
            &\implies v =
            \begin{cases}
                \frac{b}{r^{n-2}} + c & n\geq 3 \\
                b \ln r + c & n=2
            \end{cases}
        \end{align*}$


??? theorem "Theorem 2.3"
    ## Solution of the Poisson equation <a id="t23"></a>

    Let $f\in C_c^2(\R^n)$ and consider the convolutoin

    $$u(x):= \int_{\R^n} \Phi(x-y)f(y) \, dy.$$
    
    Then, $u\in C^2(\R^n)$ and solves the Poisson equation.

    ??? proof
        === "Continuity"
            We have that $Df$ and $D^2f$ are uniformly continuous, so we get

            $\begin{align*}
                \implies& \frac{f(x+h e_i - y) - f(x-y)}{h}
                \overset{\text{unif}}{\to} \partial_{x_i}f(x-y) \\
                \implies& \frac{u(x+h e_i)-u(x)}{h} = \int_{\R^n} \Phi(y) \frac{f(x+h e_i - y) - f(x-y)}{h} \, dy
                \overset{\text{unif}}{\to} \int_{\R^n} \Phi(y) \partial_{x_i}f(x-y) \, dy \\
                \implies& u_{x_ix_j} = \int_{\R^n} \Phi(y) f_{x_ix_j}(x-y) \, dy 
            \end{align*}$

            We have that $\Phi(y) f_{x_ix_j}(x-y)$ is continuous in $x$, so $u\in C^2(\R^n)$.

        === "Solution to the equation"
            When proving continuity, we showed that

            $$\Delta u(x) = \int_{\R^n} \Phi(y) \Delta_x f(x-y) \, dy$$

            $\begin{align*}
                \text{Let } & I_\varepsilon := \int_{B(0, \varepsilon)} \Phi(y) \Delta_x f(x-y) \, dy \\
                & J_\varepsilon := \int_{\R^n\setminus B(0, \varepsilon)} \Phi(y) \Delta_x f(x-y) \, dy
            \end{align*}$

            ??? proof "Claim: $I_\varepsilon \to 0$"
                $$
                \begin{align*}
                    |I_\varepsilon| &\leq
                    c \cdot \|D^2 f\|_{L^\infty(\R^n)} \cdot \int_{B(0, \varepsilon)} |\Phi(y)| \, dy \\
                    &\le c \begin{cases}
                        \varepsilon^2 |\ln \varepsilon| & n=2 \\
                        \varepsilon^2 & n\geq 3
                    \end{cases} \\
                    &\to 0
                \end{align*}
                $$
                
            Let $F:= \Phi(y) \nabla_y f(x-y)$.

            $$
            \begin{align*}
                \implies \div_y F &= \div_y \left(\Phi(y) \nabla_y f(x-y)\right) \\
                &= \nabla_y \Phi(y) \cdot \nabla_y f(x-y) + \Phi(y) \Delta_y f(x-y) \\
                \implies J_\varepsilon &= \int_{\R^n\setminus B(0, \varepsilon)} \nabla_y \Phi(y) \cdot \nabla_y f(x-y) dy
                - \int_{\R^n\setminus B(0, \varepsilon)} \div_y \left(\Phi(y) \nabla_y f(x-y)\right) \, dy \\
                &= \int_{\R^n\setminus B(0, \varepsilon)} D_y \Phi(y) \cdot D_y f(x-y) dy
                + \int_{\partial B(0, \varepsilon)} \Phi(y) \par{f(x-y)}{\nu} \, d\s
            \end{align*}
            $$

            Let $K_\varepsilon$ be the volume integral and $L_\varepsilon$ be the surface integral as defined above.
            Then, we have that $L_\varepsilon$ vanishes as $\varepsilon\to 0$:

            $$
            |L_\varepsilon| \leq \|D f\|_{L^\infty(\R^n)} \cdot \int_{\partial B(0, \varepsilon)} |\Phi(y)| \, d\s \le c
            \begin{cases}
                \varepsilon |\ln \varepsilon| & n=2 \\
                \varepsilon & n\geq 3
            \end{cases}
            $$

            Using integral by parts again on $K_\varepsilon$, and the fact that $\Phi$
            is harmonic in $\R^n\setminus\{0\}$, we get

            $$
            \begin{align*}
                K_\varepsilon &= \int_{\R^n\setminus B(0, \varepsilon)} \Delta_y \Phi(y) f(x-y) \, dy
                + \int_{\partial B(0, \varepsilon)} \par{\Phi(y)}{\nu} f(x-y) \, d\s \\
                &=\int_{\partial B(0, \varepsilon)} \par{\Phi(y)}{\nu} f(x-y) \, d\s
            \end{align*}
            $$

            ??? proof "Claim: $\left.\par{\Phi}{\nu}\right|_{|y|=\varepsilon} = -|\partial B(0, \varepsilon)|$"
                $$
                \begin{align*}
                    \par{\Phi}{\nu} &= \nabla \Phi \cdot \nu \\
                    & \frac{1}{n\alpha(n)} \frac{y}{|y|^n} \cdot \frac{y}{|y|} \\
                    & \frac{1}{n\alpha(n)} \frac{1}{|y|^{n-1}} \\
                    \left.\par{\Phi}{\nu}\right|_{|y|=\varepsilon} &= -|\partial B(0, \varepsilon)|
                \end{align*}
                $$

            Thus, we get

            $$K_\varepsilon = -\fint_{\partial B(0, \varepsilon)} f(x-y) \, d\s \to -f(x)$$

            which by continuity yields $-\Delta u = f$. 

            