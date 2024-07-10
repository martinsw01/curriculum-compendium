# 3.1 Solutions to the heat equation

We want to study the evolution in time of the heat (or chemical concentration) in an open
region $\Omega \subset \R^n$. Denote by $u(x,t)$ the density of heat at $x \in \Omega$ and
time $t \geq 0$.

## Deriving the heat equation

The rate of change of the heat in $V \subset \Omega$ is proportional to the
flux through the boundary $\partial V$:

$$\frac{d}{dt} \int_V u \, dx = -\int_{\partial V} F \cdot \nu \, d\s$$

or equivalently $u_t = \div F$. Now, assume that $F = -D \nabla u$ for some diffusion
coefficient $D > 0$. Then, we get the heat equation

$$u_t = -D \Delta u.$$

From now on, we will assume $D = 1$.

## The fundamental solution

Define the function

$$\Phi(x,t) = \begin{cases}
    \frac{1}{(4\pi t)^{n/2}} e^{-\frac{|x|^2}{4t}},& t > 0, \\
    0,& t = 0.
\end{cases}$$

Then, $\Phi$ is singular at $(0, 0)$ and a radial function in $x$. Further, $\Phi$ is
normalized such that $\int_{\R^n} \Phi \, dx = 1$.

??? proof
    $$
    \begin{align*}
        \int_{\R^n} \Phi \, dx &= \frac{1}{(4\pi t)^{n/2}} \int_{\R^n} e^{-\frac{|x|^2}{4t}} \, dx \\
        &= \frac{1}{\pi^{n/2}} \int_{\R^n} e^{-|z|^2} \, dz \\
        &= \frac{1}{\pi^{n/2}} \prod_{i=1}^{n} \int_\R e^{-z_i^2} \, dz_i \\
        &= \frac{1}{\pi^{n/2}} \left(\int_\R e^{-y^2} \, dy\right)^n \\
        &= 1
    \end{align*}
    $$

The reader can easily verify that $\Phi$ is a solution of the heat equation.


## The Cauchy problem

Consider the problem

$$
\left\{\begin{align*}
    u_t - \Delta u &= 0, && \text{in } \R \times (0, \infty), \\
    u &= g, && \text{on } \R \times \{0\}.
\end{align*}\right.
$$

??? theorem "Theorem 3.1"
    ### Solution of the Cauchy problem <a id="t31"></a>

    Assume $g\in C(\R^n) \cap L^\infty(\R^n)$. Then, the function

    $$u(x,t) = \int_{\R^n} \Phi(x-y,t)g(y) \, dy$$

    satisfies

    $$
    \begin{align*}
        (1) &\quad u \in C^\infty\Big(\R^n \times (0, \infty)\Big), \\ \\
        (2) &\quad u_t - \Delta u = 0 \quad \text{in } \R^n \times (0, \infty), \\ \\
        (3) &\quad \lim_{(x,t)\to (x_0, 0)} u(x,t) = g(x_0) \quad \forall\ x_0 \in \R^n.
    \end{align*}
    $$

    ??? proof
        $\Phi$ has unoformly bounded derivatives at $\R^n \times (\delta, \infty)$
        for all $\delta > 0$. Thus, we can differentiate under the integral $(*)$.

        === "$(1)$"
            $\begin{align*}
                & \overset{(*)}{\implies} u \in C^\infty\Big(\R^n \times (\delta, \infty)\Big) \quad \forall\ \delta > 0, \\
                & \implies u \in C^\infty\Big(\R^n \times (0, \infty)\Big).
            \end{align*}$

        === "$(2)$"
            $$\overset{(*)}{\implies} u_t - \Delta u = \int_{\R^n} (\Phi_t - \Delta \Phi)g \, dy = 0.$$

        === "$(3)$"
            Fix any $x_0 \in \R^n$. As $g$ is continuous, we have that
            
            $$\forall\ \varepsilon > 0\ \exists\ \delta > 0: g(B(x_0, \delta)) \subset B(g(x_0), \varepsilon) \quad (*)$$

            Let $x \in B(x_0, \delta/2)$ and $t << 1$"
            
            $$          
            \begin{align*}
                |u(x, t) - g(x_0)| &= \left|\int_{\R^n} \Phi(x-y, t)g(y) \, dy - g(x_0)\right| \\
                &= \left|\int_{\R^n} \Phi(x-y, t)(g(y) - g(x_0)) \, dy\right| \\
                &\leq \int_{\R^n\setminus B(x_0, \delta)} \Phi(x-y, t)|g(y) - g(x_0)| \, dy
                + \int_{B(x_0, \delta)} \Phi(x-y, t)|g(y) - g(x_0)| \, dy
            \end{align*}
            $$

            Let $I$ be the first integral, and note that by $(*)$, we have

            $$|u(x, t) - g(x_0)| \leq I + \varepsilon.$$

            Then, itremains to find an upper bound for $I$. Note, that for
            $y - x_0 > \delta$, we have

            $$
            \begin{align*}
                |y - x_0| &\leq |y-x| + |x-x_0| \\
                &\leq |y-x| + \delta/2 \\
                &\leq |y-x| + \frac{1}{2} |y-x_0| \\
                \implies |y-x| &\ge \frac{1}{2} |y-x_0| \\
                \implies \exp\left(-\frac{|y-x|^2}{4}\right) &\le \exp\left(-\frac{|y-x_0|^2}{16}\right)
            \end{align*}
            $$

            Using this, we get

            $$
            \begin{align*}
                I &\leq 2 \|g\|_{L^\infty(\R^n)} \int_{\R^n\setminus B(x_0, \delta)} \Phi(x-y, t) \, dy \\
                &\leq \frac{C}{t^{n/2}} \int_{\R^n\setminus B(x_0, \delta)} \exp\left(-\frac{|x-y|^2}{4t}\right) \, dy \\
                &\leq \frac{C}{t^{n/2}} \int_{\R^n\setminus B(x_0, \delta)} \exp\left(-\frac{|y-x_0|^2}{16t}\right) \, dy \\
                &= C \int_{\R^n\setminus B(0, \delta/\sqrt t)} \exp\left(-\frac{|z|^2}{16t}\right) \, dz \xrightarrow{t\to 0^+} 0
            \end{align*}
            $$


## Non-physical solutions

Consider a function $g \in C(\R^n) \cap L^\infty(\R^n)$ such that $g \geq 0$ and
$g \not\equiv 0$.

$$\implies u(x,t) = \int_{\R^n} \Phi(x-y,t)g(y) \, dy > 0 \quad \forall\ (x,t) \in \R^n \times (0, \infty).$$

No matter how far away $x$ is from $\Supp g$, the heat at $x$ will be positive at all
times. Thus, of the support of $g$ is bounded, then the "regularity information" propagates
at infinite speed.


## Non-homogeneous Cauchy problem

The non-homogeneous Cauchy problem is given by

$$
\left\{\begin{align*}
    u_t - \Delta u &= f, && \text{in } \R \times (0, \infty), \\
    u &= 0, && \text{on } \R \times \{0\}
\end{align*}\right.\quad (NH)
$$

Consider, for $s\in\R$, the family of functions

$$u(x, t; s) := \int_{\R^n} \Phi(x-y, t-s)f(y, s) \, dy.$$

By [T.3.1](#t31), we have that $u(x, t; s)$ is a solution of

$$
\left\{\begin{align*}
    u_t(x, t; s) - \Delta u(x, t; s) &= 0, && \text{in } \R \times (s, \infty), \\
    u(x, t; s) &= f(x, s), && \text{on } \R \times \{s\}.
\end{align*}\right.
$$

??? theorem "Theorem 3.2"
    ### Solution of the non-homogeneous Cauchy problem <a id="t32"></a>

    Assume $f\in C_1^2(\R^n \times [0, \infty))$. Then, the function

    $$u(x,t) = \int_0^t u(x, t; s) \, ds$$

    satisfies

    $$
    \begin{align*}
        (1) &\quad u \in C_1^2\Big(\R^n \times (0, \infty)\Big), \\ \\
        (2) &\quad u_t - \Delta u = f \quad \text{in } \R^n \times (0, \infty), \\ \\
        (3) &\quad \lim_{(x,t)\to (x_0, 0)} u(x,t) = 0 \quad \forall\ x_0 \in \R^n.
    \end{align*}
    $$

    ??? proof "Poof: omitted"
