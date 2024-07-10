# 4.5 Towards a weaker definition of solutions

Consider the Cauchy problem <a id="cp"></a>

$$(CP) \quad \left\{\begin{align*}
    u_t + q(u)_x &= 0, \\
    u(x, 0) &= u_0(x).
\end{align*}\right.$$

We have already shown that

$$u(x, t) = q\Big(x - q'(g(\xi))t\Big) \quad\quad (1)$$

is a solution of $(CP)$ representing a progressive wave with velocity $q'(g(\xi))$ and

$$u(x, t) = g(\xi) \quad\quad (2)$$

along the characteristic $x = q'(g(\xi))t + \xi$ coming from the
point $(\xi, 0)$. By $(1)$, we can write that $u$ is implicitly defined by $G(x, t, u) = 0$
with

$$
\begin{align*}
    G(x,t,u):&= u - g\Big(x - q'(u)t\Big) \\
    &\overset{(2)}{=} u - g\Big(x - q'(g(\xi))t\Big) \\
\end{align*}
$$

Now, assume that $g, q'$ are differentiable. Then, we can use the implicit function theorem to
find $u$ as a function of $(x, t)$ as long as.

$$G_u(x, t, u) = 1 - t q''(u) q'(x - q'(u)t) \neq 0.$$

Along the characteristic $x = q'(g(\xi))t + \xi$, we have

$$G_u(x, t, u) = 1 - t q''(g(\xi)) q'(\xi)$$

???+ remark
    Note that if $q''(g(\xi)) q'(\xi) \ge 0$, the solution obtained by the method of
    characteristics is regular for all $t \ge 0$.

    This is because the slope of the characteristics

    $$\frac{d}{d\xi} q'(g(\xi)) = q''(g(\xi)) g'(\xi)$$

    is always decreasing, so htey do not intersect.

???+ theorem
    $\begin{align*}
        \text{Let } & q \in C^2(\R) \\
        & g \in C^1(\R)
    \end{align*}$

    such that $g''(g(\xi)) q'(g(\xi)) \ge 0$  in $\R$.

    Then, $G(x, t, u) = 0$ defines $u=u(x,t)$ as the unique solution of $\href{#cp}{(CP)}$ in
    $C^1(\R \times [0, \infty))$.

    ??? proof
        Along the characteristic $\xi = x - q'(u)t$, we have

        $$G_u(x, t, u) = 1 + t q''(u) q'(x - q'(u)t) \ge 1 \quad \forall t \ge 0.$$

        Thus, by the implicit function theorem, $u$ is unique. Additionaly, it gives

        $$
        \left\{\begin{align*}
            u_t = \frac{G_t(x, t, u)}{G_u(x, t, u)} = \frac{q'(x - q'(u)t) q'(u)}{1 - t q''(u) q'(x - q'(u)t)} \\
            u_x = \frac{G_x(x, t, u)}{G_u(x, t, u)} = \frac{g'(x - q'(u)t)}{1 - t q''(u) q'(x - q'(u)t)}
        \end{align*}\right.
        $$

        So $u_t, u_x$ are continuous functions being given by quationsts of continuous
        functions with denominators that are always greater than $1$. Thus,
        $u \in C^1(\R \times [0, \infty))$.


What then, if $g''(g(\xi)) q'(g(\xi)) < 0$? In this case, the characteristics intersect at
the shock line. Denote by $t_s$ the breaking time and $x_s$ the point where the shock line
starts. At this point, we have a solution of

$$0 = G_u(x, t(\xi), u) = 1 - t(\xi) q''(g(\xi)) g'(\xi)$$

Assume that we are solving $\href{#cp}{(CP)}$ for $x \in [a, b]$. We have that

$$t(\xi) = \frac{-1}{q''(g(\xi)) g'(\xi)}$$

Let $x(\xi) = -q''(g(\xi)) g'(\xi) \in C[a, b]$ and assume that $z$ has a unique maximum
at $\xi_M \in [a, b]$. Then, the shock line starts at

$$t_s = \min_{\xi\in[a, b]} \frac{1}{z(\xi)} = \frac{1}{z(\xi_M)}$$

and at the point

$$x_s = q'(g(\xi_M)) t_s + \xi_M = \frac{q'(g(\xi_M))}{z(\xi_M)}+ \xi_M$$

---

We have now shown examples raising issues such as $(1)$ the characteristics are not
covering the half-plane and $(2)$ the characteristics might collide generating
discontinuities. Solving these, we get

$$
\begin{align*}
    (1) \quad &\text{Rarefaction waves} \\
    (2) \quad &\text{Shock waves}
\end{align*}
$$

This raises some questions:

1. In which sense are they solutions?
2. Are they unique?
3. If not, is there any criterion that might help in choosing one or another solution?

Consider again the Cauchy problem $\href{#cp}{(CP)}$. If $u \in C^1(\R \times [0, \infty))$
solves $(CP)$, we say that $u$ is a **classical solution**. Now, let
$v \in C^1_c(\R \times [0, \infty))$ be a **test function**. Multiplying the equation by $v$ and
integrating, we get <a id="w"></a>

$$\int_0^\infty \int_\R (u_t + q(u)_x)v \, dx\, dt = 0 \quad\quad (W)$$

By integration by parts and using that $v$ has compact support, we get

$$
\begin{align*}
    \int_0^\infty \int_\R u_t v \, dx\, dt
    &= -\int_0^\infty \int_\R u v_t\, dx\, dt + \int_\R u(x, t) v(x, t) \Big|_{t=0}^\infty\, dxs \\
    &= -\int_0^\infty \int_\R u v_t\, dx\, dt + \int_\R g(x) v(x, 0)\, dx
\end{align*}
$$

Again, by integration by parts, and using that there is no incoming flux density $q \circ u$
at infinity, we get

$$\int_0^\infty \int_\R q(u)_x v\, dx\, dt = -\int_0^\infty \int_\R q(u) v_x\, dx\, dt$$

Thus, $(W)$ becomes

$$\int_0^\infty \int_\R \left(u v_t + q(u) v_x\right)\, dx\, dt + \int_\R g(x) v(x, 0)\, dx = 0$$

Thus is an integral equation for $u$ which holds for all test functions $v$. Now, $u$
does not need to be differentiable. However, if it is, we can again use integration by parts
to get that

$$\int_0^\infty \int_\R [u_t + q(u)_x]v\, dx\, dt - \int_R [q(x) - u(x)] v(x, 0)\, dx = 0$$

Consider the test functions wich vanish at $t = 0$. Then, we have

$$\int_0^\infty \int_\R [u_t + q(u)_x]v\, dx\, dt = 0$$

Using the following theorem

???+ theorem
    $\begin{align*}
        \text{Let } & \Omega \subseteq \R^n \text{ be open} \\
        & f \in C(\Omega)
    \end{align*}$

    $$\int_\Omega f v \, dx = 0 \quad \forall v \in C_c^1(\Omega) \implies f \equiv 0$$

    ??? proof
        $C^1_c(\Omega)$ is dense in $C(\Omega)$, so for all compact subsets
        $K \subseteq \Omega$, there exists a sequence of functions
        $v_n \in C^1_c(\Omega)$ converging to $f$ uniformly. Thus,

        $$0 = \lim_{n\to\infty} \int_\Omega f v_n \, dx = \int_K f^2 \, dx$$

        So $f \equiv 0$ on $K$. This holds for all compact subsets, so $f \equiv 0$ on
        $\Omega$.

we get that $u_t + q(u)_x = 0$ in $\R \times (0, \infty)$. Hence, $(W)$ becomes

$$\int_\R [g(x) - u(x, 0)] v(x, 0)\, dx = 0$$

and we get $u(x, 0) = g(x)$. Thus, $\href{#cp}{(CP)} \iff \href{#w}{(W)}$ if $u$ is regular.


???+ definition "Definition"
    A funciton $u \in L^\infty(\R \times [0, \infty))$ is a **weak solution** of 
    $\href{#cp}{(CP)}$ if $\href{#w}{(W)}$ holds for all test functions.
    