# 2.4 Green's Function Method

Consider an open, bounded domain $\Omega \subset \R^n$ with boundary in $C^1$. We are looking
for a representation formula for

$$
\left\{
\begin{align*}
    -\Delta u &= f \quad \text{in } \Omega, \\
    u &= g \quad \text{on } \partial \Omega.
\end{align*}
\right.
$$

Consider $u \in C^2(\overline \Omega)$ and fix $B(x, \varepsilon) \subset \Omega$. Further,
set $V_\varepsilon := \Omega \setminus B(x, \varepsilon)$. From Stokes theorem, we get
Green's identiy:

$$
\int_U(u\Delta v - v \Delta u) \, dx
= \int_U \nabla \cdot (u\nabla v - v\nabla u) \, dx
= \int_{\partial U} (u \par{v}{\nu} - v \par{u}{\nu}) \, d\s.
$$

Further, let $\Phi^* := \Phi(y-x)$. This yields

$$
\int_{V_\varepsilon} \Big(u \Delta \Phi^* - \Phi^* \Delta u\Big) \, dy
= \int_{\partial V_\varepsilon} \left(u \par{\Phi^*}{\nu} - \Phi^* \par{u}{\nu}\right) \, d\s.
$$

Note that

$$
\begin{align*}
    (1) &\quad \Delta \Phi^* = 0 \iff y \neq x, \\
    (2) &\quad \left|\int_{\partial B(x, \varepsilon)} \Phi^* \par{u}{\nu} \, d\s\right|
    \leq c \cdot \varepsilon^{n-1} \cdot \max_{\partial B(x, \varepsilon)} |\Phi| \to 0 \\
    (3) &\quad \int_{\partial B(x, \varepsilon)} u \par{\Phi^*}{\nu} \, d\s = \fint_{\partial B(x, \varepsilon)} u \, d\s \to u(x) \\
    (4) &\quad \int_{B(x, \varepsilon)} \Phi^* \Delta u \, dy \to 0.
\end{align*}
$$

Where $(3)$ and $(4)$ are results from the proof of [T.2.3](../1_sol_lap_poiss_eq#t23). From
these and the fact that $\Omega = V_\varepsilon \cup B(x, \varepsilon)$, we get

$$
\begin{align*}
    -\int_\Omega \Phi^* \Delta u \, dy
    &= -\int_{V_\varepsilon} \Phi^* \Delta u \, dy - \int_{B(x, \varepsilon)} \Phi^* \Delta u \, dy \\
    &= \int_{\partial V_\varepsilon} \left(u \par{\Phi^*}{\nu} - \Phi^* \par{u}{\nu}\right) \, d\s + \mathcal{O}_\varepsilon(1) \\
    &= \int_{\partial \Omega} \left(u \par{\Phi^*}{\nu} - \Phi^* \par{u}{\nu}\right) \, d\s
    + \int_{\partial B(x, \varepsilon)} \left(u \par{\Phi^*}{\nu} - \Phi^* \par{u}{\nu}\right) \, d\s
    + \mathcal{O}_\varepsilon(1).
\end{align*}
$$

Then, from $(2)$ and $(3)$, and taking the limit as $\varepsilon \to 0$, we get

$$
u(x)
= \int_{\partial \Omega} \Phi^* \par{u}{\nu} \, d\s
- \int_{\partial \Omega} u \par{\Phi^*}{\nu} \, d\s
- \int_{\Omega} \Phi^* \Delta u \, dy.
$$

and we can replace $u|_{\partial \Omega}$ by $g$ and $\Delta u|_\Omega$ by $f$. However,
we cannot yet handle $\partial_\nu u|_{\partial \Omega}$. Green's function method aims to
solve this issue. Consider the function $\Phi^x = \Phi^x(y)$ satisfying

$$
(P^*) \quad \left\{\begin{align*}
    -\Delta_y \Phi^x(y) &= 0, & y &\in \Omega, \\
    \Phi^x(y) &= \Phi^*(y), & y &\in \partial \Omega.
\end{align*}\right.
$$

Then, by green's identity, we get

$$
\begin{align*}
    - \int_\Omega \Phi^x \Delta u \, dy
    &= \int_{\partial \Omega} \Big(u \partial_\nu \Phi^x - \Phi^x \partial_\nu u\Big) \, d\s \\
    &= \int_{\partial \Omega} \Big(u \partial_\nu \Phi^x - \Phi^* \partial_\nu u\Big) \, d\s.
\end{align*}
$$

Now, set $G := \Phi^* - \Phi^x$. Then, we have

$$u(x) = -\int_{\partial \Omega} u\partial_\nu G \, d\s - \int_\Omega G \Delta u \, dy.$$

We call $G$ the Green's function of our PDE. Finally, we can write

$$u(x) = \int_{\partial \Omega} g \partial_\nu G \, d\s + \int_\Omega G f \, dy.$$

Then, it remains to find $G$. It can be shown to exist for regular enough $\Omega$.
In particular, we will look at the half-space $\R^n_+ = \{x \in \R^n \mid x_n > 0\}$.


???+ theorem "Theorem 2.17"
    $$G(x, y) = G(y, x) \quad \forall\ y\neq x \in \Omega.$$


???+ theorem "Theorem 2.18"
    ## Poisson formula for the half-space

    Assume $g \in C(\R^{n-1}) \cap L^\infty(\R^{n-1})$. Further, define

    $$u(x) := \frac{2x_n}{n\alpha(n)} \int_{\partial \R^n_+} \frac{g(y)}{|x-y|^n} \, dy.$$

    Then, $u$ satisfies

    $$
    \begin{align*}
        (1) &\quad u\in C^\infty(\R^n_+) \cap L^\infty(\R^n_+), \\
        (2) &\quad \Delta u = 0 \quad \text{in } \R^n_+, \\
        (3) &\quad \lim_{x\to x_0} u(x) = g(x_0) \quad \forall\ x_0 \in \partial \R^n_+.
    \end{align*}
    $$

???+ remark
    The function

    $$k(x, y) := \frac{2x_n}{n\alpha(n)} \frac{1}{|x-y|^n}, \quad x \in \R^n_+, y \in \partial \R^n_+$$

    is known as the Poisson kernel for the half-space.


**Idea behind the construction**

For $x \in \R^n_+$, set $\tilde x = (x_1, \dots, x_{n-1}, -x_n)$ and
$\Phi^x(y) := \Phi(y-\tilde x)$. Then, $\Phi^x$ is singular for $x \not\in \R^n_+$, and
$\Phi^x(y) = \Phi(y-x)$ for $y \in \partial \R^n_+$, so it satisfies $(P^*)$. This results
in

$$
\begin{align*}
    \par{G}{\nu}(x, y) = -\par{G}{y_n}(x, y) &= \par{\Phi(y-\tilde x)}{y_n} - \par{\Phi(y-x)}{y_n} \\
    &= - \frac{1}{n\alpha(n)} \frac{1}{|x-y|^n} (y_n +x_n - y_n + x_n) \\
    &= - \frac{2x_n}{n\alpha(n)} \frac{1}{|x-y|^n}.
\end{align*}
$$

???+ theorem "Theorem 2.19"
    ## Poisson formula for the ball

    Assume $g \in C(\partial B(0, r))$ and define

    $u(x) := \frac{r^2 - |x|^2}{n\alpha(n)r} \int_{\partial B(0, r)} \frac{g(y)}{|x-y|^n} \, d\s(y).$

    Then, $u$ satisfies

    $$
    \begin{align*}
        (1) &\quad u \in C^\infty(B(0, r)), \\
        (2) &\quad \Delta u = 0 \quad \text{in } B(0, r), \\
        (3) &\quad \lim_{x\to x_0} u(x) = g(x_0) \quad \forall\ x_0 \in \partial B(0, r).
    \end{align*}
    $$

???+ remark
    The function

    $$k(x, y) := \frac{r^2 - |x|^2}{n\alpha(n)r} \frac{1}{|x-y|^n}, \quad x, y \in B(0, r)$$

    is known as the Poisson kernel for the ball $B(0, r)$.

Again, we want to find $\Phi^x$ satisfying $(P^*)$. Assume $n \geq 3$ and observe that
$y \mapsto \Phi(y-\tilde x)$ is harmonic for $\tilde x \not \in B(0, r)$. Now, fix any
$x \neq 0$ and consider the function

$$y \mapsto \frac{|x|^2}{r^2} \Phi(y- \tilde x) = \Phi\left(\frac{|x|}{r} (y - \tilde x)\right),$$

which is also harmonic. On the boundary, we want to have

$$\Phi\left(\frac{|x|}{r} (y - \tilde x)\right) = \Phi(y-x).$$

If we choose $\tilde x = r^2 \frac{x}{|x|^2}$, we achieve this. Thus, we define

$$\Phi^x(y) := \Phi(y-\tilde x) = \Phi\left(y - r^2 \frac{x}{|x|^2}\right)$$

and proceed as before to define $G$.