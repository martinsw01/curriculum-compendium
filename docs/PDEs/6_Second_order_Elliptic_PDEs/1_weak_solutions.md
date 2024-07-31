# 6.1 Weak solutions

Consider the operator $L$ in divergence form

$$Lu = f$$

Now suppose that

$$
\begin{align*}
    a^{ij}, b, c &\in L^\infty(\Omega) \\
    f & \in L^2(\Omega) \\
    u & \in C^\infty(\Omega) : a^{ij} u_{x_i} \in C^1(\Omega)
\end{align*}
$$

and multiply $(1)$ by $v \in C_c^\infty(\Omega)$ and integrate by parts yielding

$$\int_\Omega\left(\sum_{i,j=1}^n a_{ij}(x) u_{x_i} v_{x_j}
+ \sum_{i=1}^n b_i(x) u_{x_i} v + c(x)uv\right)\,dx
= \int_\Omega f v\,dx \tag{2}$$

By density of $C_c^\infty(\Omega)$ in $H_0^1(\Omega)$, $(2)$ holds for all
$v, u \in H_0^1(\Omega)$. For such a $u$, we can think of having considered the 
homogeneous problem

$$
\left\{\begin{align*}
    Lu &= f && \text{in } \Omega \\
    u &= 0 && \text{on } \partial\Omega
\end{align*}\right.\tag{3}
$$

???+ definition "Definition 6.4"
    Let $B : H_0^1(\Omega) \times H_0^1(\Omega) \to \R$ be the bilinear form defined by

    $$B[u, v] := \int_{\Omega} \left(\sum_{i,j=1}^n a_{ij} u_{x_i} v_{x_j}
    + \sum_{i=1}^n b_i u_{x_i} v + c uv\right)\,dx$$

    $B$ is said to be associated to $L$.


???+ definition "Definition 6.5"
    ## Weak solution

    We say that $u \in H_0^1(\Omega)$ is a weak solution of $(3)$ if

    $$B[u, v] = \inner{f}{v} \quad\forall\, v \in H_0^1(\Omega)$$

    
???+ remark "Remark 6.6"
    ## Non-zero boundary conditions

    Suppose that $\partial\Omega \in C^1$ and $u \in H^1(\Omega)$ is a weak solution of
    
    $$
    \left\{\begin{align*}
        Lu &= f && \text{in } \Omega \\
        u &= g && \text{on } \partial\Omega
    \end{align*}\right.
    $$

    That is equivalent to

    $$
    \left\{\begin{align*}
        B[u, v] &= \inner{f}{v} \quad\forall\, v \in H_0^1(\Omega) \\
        \operatorname{Tr}u &= g 
    \end{align*}\right.
    $$

    ??? proof
        Suppose that there is a $w \in H^1(\Omega)$ such that

        $$
        \begin{align*}
            \operatorname{Tr}w &= g \\
            L w \in L^2(\Omega)
        \end{align*}
        $$

        Then, we have that $\overline u := u - w \in H_0^1(\Omega)$ and

        $$
        \left\{\begin{align*}
            L\overline u &= f - Lw =: \overline f && \text{in } \Omega \\
            \overline u &= 0 && \text{on } \partial\Omega
        \end{align*}\right.
        $$

        Now, $\overline f = f - Lw \in L^2(\Omega)$ and the problem is reconstruted in the
        homogeneous setting.


???+ theorem "Theorem 6.7"
    ## Lax-Milgram theorem <a id="t67"></a>

    Let $H$ be a Hilbert space. Assume $B : H \times H \to \R$ is a bilinear mapping
    with $\alpha, \beta > 0$ such that

    $$
    \begin{align*}
        (1) && |B[u, v]| &\leq \alpha \|u\| \|v\| & \text{bouneded} \\
        (2) && B[u, u] &\geq \beta \|u\|^2 & \text{coercive}
    \end{align*}
    $$

    and let $f : H \to \R$ be a bounded linear functional on $H$.

    $$\implies \exists! u \in H : B[u, v] = \inner{f}{v} \quad\forall\, v \in H$$

???+ remark "Remark 6.8"
    In the case $B[u, v] = B[v, u]$, we have that $(H, B[\cdot, \cdot])$ is a Hilbert space.
    Thus, [L-M](#t67) is equivalent to the Riesz representation theorem.



???+ theorem "Theorem 6.8"
    ## Energy estimates <a id="t68"></a>

    Let $B : H_0^1(\Omega) \times H_0^1(\Omega) \to \R$ be the bilinear form associated to
    $L$.

    Then, there exists $\alpha, \beta > 0, \gamma \ge 0$ such that for all
    $u, v \in H_0^1(\Omega)$, we have

    $$
    \begin{align*}
        (1) && |B[u, v]| &\leq \alpha \|u\|_{H^1(\Omega)} \|v\|_{H^1(\Omega)} \\
        (2) && \beta \|u\|_{H^1(\Omega)}^2 &\leq B[u, u] + \gamma \|u\|_{L^2(\Omega)}^2
    \end{align*}
    $$

    ??? proof
        === "$(1)$"
            $$
            \begin{align*}
                |B[u, v]|
                &\le \sum_{i,j=1}^{n} \|a^{ij}\|_{L^\infty(\Omega)}
                \int_\Omega |\nabla u| |\nabla v|\,dx \\
                &\quad\quad + \sum_{i=1}^{n} \|b^i\|_{L^\infty(\Omega)}
                \int_\Omega |\nabla u| |v|\,dx \\
                &\quad\quad + \|c\|_{L^\infty(\Omega)} \int_\Omega |u| |v|\,dx \\
                & \le \alpha \|u\|_{H^1(\Omega)} \|v\|_{H^1(\Omega)}
            \end{align*}
            $$

            $$\alpha = \sum_{i,j=1}^{n} \|a^{ij}\|_{L^\infty(\Omega)}
            + \sum_{i=1}^{n} \|b^i\|_{L^\infty(\Omega)}
            + \|c\|_{L^\infty(\Omega)}$$

        === "$(2)$"
            As $L$ is uniformly elliptic, we have

            $$
            \begin{align*}
                \theta |\nabla u|^2 & \le \sum_{i,j=1}^{n} a^{ij} u_{x_i} u_{x_j} \\
                \theta \|Du\|_{L^2(\Omega)}^2
                & \le \int_\Omega \sum_{i,j=1}^{n} a^{ij} u_{x_i} u_{x_j}\,dx \\
                &= B[u, u] - \int_\Omega \left(\sum_{i=1}^{n} b^i u_{x_i}u + cu^2\right)\,dx
                \tag{i}
            \end{align*}
            $$

            By Young's inequality, we have

            $$
            \begin{align*}
                \left|\int_\Omega b^i u_{x_i} u\,dx\right|
                & \le \|b^i\|_{L^\infty(\Omega)} \int_\Omega |u_{x_i} u|\,dx \\
                & \le \|b^i\|_{L^\infty(\Omega)} \left(
                \varepsilon \int_\Omega |u_{x_i}|^2\,dx
                + \frac{1}{4\varepsilon} \int_\Omega |u|^2\,dx\right) \tag{ii}
            \end{align*}
            $$

            Now, choose $\varepsilon > 0$ such that
            $\displaystyle \varepsilon \sum_{i=1}^{n} \|b^i\|_{L^\infty(\Omega)}
            < \frac{\theta}{2}$. Then, we get from $(ii)$ that

            $$
            \begin{align*}
                \sum_{i=1}^n \left|\int_\Omega b^i u_{x_i} u\,dx\right|
                & \le \varepsilon \sum_{i=1}^n \|b^i\|_{L^\infty(\Omega)}
                \|\nabla u\|_{L^2(\Omega)}^2
                + \frac{1}{4\varepsilon} \|u\|_{L^2(\Omega)}^2
                \sum_{i=1}^{n} \|b^i\|_{L^\infty(\Omega)} \\
                &= \frac{\theta}{2} \|\nabla u\|_{L^2(\Omega)}^2
                + \frac{1}{4\varepsilon} \|u\|_{L^2(\Omega)}^2
                \sum_{i=1}^{n} \|b^i\|_{L^\infty(\Omega)}
            \end{align*}
            $$

            Inserting this into $(i)$, we get

            $$\beta \|\nabla u\|_{L^2(\Omega)}^2
            \le B[u, u] + \gamma \|u\|_{L^2(\Omega)}^2$$

            for $\beta = \frac{\theta}{2}$ and any
            $\displaystyle \gamma \ge \frac{1}{4\varepsilon}
            \sum_{i=1}^{n} \|b^i\|_{L^\infty(\Omega)} - \inf c$.


???+ remark "Remark 6.9"
    Note that if $c \ge 0$ and $b^i \equiv 0$, we can choose $\gamma = 0$ in [T.6.8](#t68).


???+ theorem "Theorem 6.10"
    ## Existence result <a id="t610"></a>

    Let $\gamma$ be as in [T.6.8](#t68).

    $$
    \begin{align*}
        \implies & \forall\, \mu\ge \gamma, f\in L^2(\Omega)\ \exists! u \in H_0^1(\Omega)
        \text{ solution of } \\
        & \quad \left\{\begin{aligned}
            Lu &= f && \text{in } \Omega \\
            u &= 0 && \text{on } \partial\Omega
        \end{aligned}\right.
    \end{align*}
    $$

    ??? proof
        Define the bilinear form

        $$
        \begin{align*}
            B_\mu : H_0^1(\Omega) \times H_0^1(\Omega) &\to \R \\
            (u, v) &\mapsto B[u, v] + \mu \inner{u}{v}
        \end{align*}
        $$

        ??? proof "Claim: $B_\mu$ is bounded in $H_0^1(\Omega)$"
            By [T.6.8(1)](#t68), we have a bound on $B$:

            $$
            \begin{align*}
                |B_\mu[u, v]| &\le |B[u, v]| + \mu |\inner{u}{v}| \\
                & \le \alpha \|u\|_{H^1(\Omega)} \|v\|_{H^1(\Omega)}
                + \mu \|u\|_{L^2(\Omega)} \|v\|_{L^2(\Omega)} \\
                & \le (\alpha + \mu) \|u\|_{H^1(\Omega)} \|v\|_{H^1(\Omega)} 
            \end{align*}
            $$

        ??? proof "Claim: $B_\mu$ is coersive in $H_0^1(\Omega)$"
            By [T.6.8(2)](#t68), we have

            $$
            \begin{align*}
                B_\mu[u, u] &= B[u, u] + \mu \|u\|_{L^2(\Omega)}^2 \\
                &\ge \beta \|u\|_{H^1(\Omega)}^2 + (\gamma + \mu) \|u\|_{L^2(\Omega)}^2 \\
                & \ge \beta \|u\|_{H^1(\Omega)}^2
            \end{align*}
            $$

        Thus, by [L-M](#t67), we have that there exists a unique $u \in H_0^1(\Omega)$
        solving $B_\mu[u, v] = \inner{f}{v}$ for all $v \in H_0^1(\Omega)$.



            