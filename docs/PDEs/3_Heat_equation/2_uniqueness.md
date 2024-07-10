# 3.2 Uniqueness of solutions

## Cauchy + boundary type

We want to study the heat flow on an open domain $\Omega \subset \R^n$ for $t\in[0,T]$.
We give info on $\Omega$ at $t=0$ and on the boundary $\partial \Omega$ for all times
$t > 0$. For the bookkeeping, we define the following sets:

$$
\begin{align*}
    \Omega_T &:= \Omega \times (0, T] && \text{parabolic interior}, \\
    \overline{\Omega}_T &:= \overline\Omega \times [0, T] && \text{parabolic cylinder}, \\
    \Gamma_T &:= \overline\Omega_T \setminus \Omega_T && \text{parabolic boundary}.
\end{align*}
$$

Notice that $\Gamma_T = \Gamma \times \{0\} \cup \partial \Omega \times [0, T)$. is the
union of the Cauchy data and the boundary data. We will study the uniqueness of the
solution.

???+ theorem "Theorem 3.3"
    ### Maximum principle for the heat equation <a id="t33"></a>

    Let $u \in C_1^2(\Omega_T) \cap C(\overline\Omega_T)$ be a solution of the heat
    equation in $\Omega_T$.

    **(1) Weak:**

    $$\max_{\overline\Omega_T} u = \max_{\Gamma_T} u$$
    
    ---

    **(2) Strong:**

    Assume that $\Omega$ is connected and $\exists\ (x_0, t_0) \in \Omega_T$ such that
    $u(x_0, t_0) = \max_{\overline\Omega_T} u$. 

    $$\implies u \text{ is constant in } \Omega_{t_0}.$$

    ??? proof
        === "$(1)$"
            For $\varepsilon > 0$, we define

            $$v(x, t) := u(x, t) + \varepsilon |x|^2$$

            ??? proof "Claim: $(\partial_t - \Delta)v < 0$"
                $$
                \begin{align*}
                    (\partial_t - \Delta) v
                    &= (\partial_t - \Delta) u + \varepsilon (\partial_t - \Delta) |x|^2 \\
                    &= -\varepsilon \Delta |x|^2 \\
                    &= 2n\varepsilon < 0
                \end{align*}
                $$

            Assume there exists a maximal point $(x_0, t_0) \in \Omega_T$ for $v$.

            $\begin{align*}
                \implies &
                \begin{cases}
                    \partial_t v(x_0, t_0) = 0 \\
                    \Delta v(x_0, t_0) \leq 0
                \end{cases} \\
                \implies & (\partial_t - \Delta)v(x_0, t_0) \ge 0 \quad \contradiction \\
                \implies & \max_{\overline\Omega_T} u \le \max_{\overline\Omega_T} v
                \le \max_{\Gamma_T} v \le \max_{\Gamma_T} u + \varepsilon \max_{\Gamma_T} |x|^2 \\
                \overset{\varepsilon\to0}{\implies}
                &\max_{\Gamma_T} u \le \max_{\overline\Omega_T} u \le \max_{\Gamma_T} u
            \end{align*}$

        === "$(2)$"
            Refer to (Evans).

???+ corollary "Corollary 3.4"
    ### Uniqueness on bounded sets <a id="c34"></a>

    $\begin{align*}
        \text{Let } & g \in C(\Gamma_T) \\
        & f \in C(\Omega_T)
    \end{align*}$

    Then, there exists at most one solution $u \in C_1^2(\Omega_T) \cap C(\overline\Omega_T)$
    of

    $$
    \left\{\begin{align*}
        u_t - \Delta u &= f & \quad \text{in } \Omega_T \\
        u &= g & \quad \text{on } \Gamma_T
    \end{align*}\right.
    $$

    ??? proof
        Assume $u, \overline u$ are two solutions. Then, let $w := u - \overline u$.

        $\begin{align*}
            \implies &
            \left\{\begin{aligned}
                w_t - \Delta w &= 0 & \quad \text{in } \Omega_T \\
                w &= 0 & \quad \text{on } \Gamma_T
            \end{aligned}\right.\\
            \implieshref{#t33}{T.3.3} &
            \left\{\begin{aligned}
                \max_{\overline\Omega_T} w &= \max_{\Gamma_T} w = 0 \\
                \max_{\overline\Omega_T} -w &= \max_{\Gamma_T} -w = 0
            \end{aligned}\right.\\
            \implies & w = 0 \\
            \implies & u = \overline u
        \end{align*}$


???+ remark "Remark: About maximum principle for $\bm t$ unbounded"
    If $\Omega_T$ is unbouned in time, the maximum principle does not hold. For example,
    let $u_k(x, t):= c \cdot e^{-k^2t} \sin(kx)$, then

    $$
    \begin{cases}
        u_t - u_{xx} = 0 \\
        u(0, t) = u(\pi, t) = 0
    \end{cases}
    $$

    but they are unbouned in $\Omega_T = (0, \pi) \times (-\infty, T)$.


???+ remark "Remark: Ill-posed problems for the heat equation"
    The dirichlet problem in space and time is ill-posed. For example, let
    $A = (0, 1) \times (0, T)$. Then, the problem becomes to find $u : A \to \R$ s.t.

    $$
    \left\{\begin{align*}
        u_t - u_{xx} &= 0 & \text{in } A \\
        u &= \phi & \text{on } \partial A, & \quad \phi \in C(\partial A)
    \end{align*}\right.
    $$

    If $\phi$ has a unique maximum pointcat $(x_0, T) \notin \Gamma_T$, then there
    exists no solution to the problem.


???+ theorem "Theorem 3.5"
    ### Maximum principle for the Cauchy problem <a id="t35"></a>

    Suppose $u \in C_1^2(\R^n \times (0, T]) \cap C(\R^n \times [0, T])$ solves

    $$
    \left\{\begin{align*}
        u_t - \Delta u &= 0 & \text{in } \R^n \times (0, T] \\
        u &= g & \text{on } \R^n \times \{t = 0\} & \quad g \in C(\R^n\times \{t = 0\})
    \end{align*}\right.
    $$

    with the growth condition

    $$u(x, t) \le A e^{a |x|^2} \quad \forall\ (x, t) \in \R^n \times [0, T]$$

    for some $A, a > 0$. Then, the following maximum principle holds:

    $$\sup_{\R^n \times [0, T]} u = \sup_{\R^n \times \{t = 0\}} g$$

    ??? proof
        WTF!?

???+ remark
    - As a consequence, we obtain the uniqueness result in the unbounded case as before.
    - Without growth condition, the solution blows uo fast as $|x| \to \infty$.
    - If $v \in C_1^2(\Omega_T)$ is a sub-solution in $\Omega_T$, then we still have

    $$\max_{\overline\Omega_T} v = \max_{\Gamma_T} v$$

    - The proof for [T.3.5](#t35) is based on the maximum principle [T.3.3](#t33). Thus,
    the conditions for [T.3.5](#t35) can be weakened to

    $$
    \begin{align*}
        (1) &\quad u_t - \Delta u \le 0 && \quad \text{in } \R^n \times (0, T) \\
        (2) &\quad u(x, 0) \le 0 && \quad \text{in } \R^n \\
        (3) &\quad u(x, t) \le A e^{a |x|^2} &
    \end{align*}
    $$

    $$\implies u \le 0 \quad \text{in } \R^n \times [0, T]$$

???+ corollary "Corollary 3.6"
    ### Bound of solution of the Cauchy problem <a id="c36"></a>

    Let $u \in C_1^2(\R^n \times (0, T)) \cap C(\R^n \times [0, T])$ s.t.

    $$\exists\, A, a > 0: |u(x, t)| \le A e^{a |x|^2}$$

    Then, the following bound holds:

    $$|u(x, t)| \le \sup_{x \in R^n} |u(x, 0)| + T \sup_{R^n \times [0, T]} |u_t - \Delta u|$$

    ???+ proof
        Assume without loss of generality that both $|u(x, 0)|$ and $|u_t - \Delta u|$ are
        bounded. Further, consider the function

        $$w_\pm(x, t) := \sup_{y\in\R^n} |u(y, 0)| + t \sup_{\R^n \times [0, T]} |u_t - \Delta u| \pm u(x, t)$$

        $\begin{align*}
            \implies &
            \left\{\begin{aligned}
                (\partial_t - \Delta) w_\pm(x, t) &= \sup_{\R^n\times [0, T]} |u_t - \Delta u|
                \pm u_t(x, t) \mp \Delta u(x, t) \ge 0 \\
                w_\pm(x, o) &= \sup_{\R^n} |u(x, 0)| \pm u(x, 0) \ge 0 \\
                w_\pm(x, t) &\ge - |u(x, t)| \ge -A e^{a |x|^2}
            \end{aligned}\right. \\
            \implies & -w_\pm \text{ satisfies the conditions in the remark above} \\
            \implies &w_\pm \ge 0 \\
            \implies & |u(x, t)| \le \sup_{\R^n} |u(y, 0)| + t \sup_{\R^n \times [0, T]} |u_t - \Delta u|
        \end{align*}$


???+ remark "Remark"
    By [C.3.6](#c36), we get uniqueness and continuous dependence on the initial data.


## Backward Cauchy problem

We observe that there is a lack of continuous dependence w.r.t. to the initial condition
for the problem

$$
\left\{\begin{align*}
    u_t - u_{xx} &= 0 && \text{in } \R \times (-\infty, 0) \\
    u(x, 0) &= g(x) && \text{on } \R
\end{align*}\right.
$$

Consider the function
$u_\varepsilon(x, t) := \varepsilon e^{-t/\varepsilon^2} \sin(x/\varepsilon)$.

$$
\implies\left\{\begin{align*}
    (\partial_t - \Delta) u_\varepsilon &= 0 \\
    u_\varepsilon(x, 0) &= \varepsilon \sin(x/\varepsilon) =: g_\varepsilon(x)
\end{align*}\right.
$$

Note that $g_\varepsilon \to 0$ uniformly in $\R$, while for $T>0$, we have
$\|u_\varepsilon\|_{C(\R \times [-T, 0])} = \varepsilon e^{T/\varepsilon^2} \to \infty$.
