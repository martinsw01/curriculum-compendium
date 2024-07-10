# 5.4 Sobolev Inequalities

???+ theorem "Theorem 5.18"
    ## Gagliardo-Nirenberg-Sobolev (GNS) Inequality <a id="t518"></a>

    For $1 \leq p < n$ and $u \in C_c^1(\R^n)$, we have $\exists\, C = C(n, p) > 0$ such that

    $$\|u\|_{L^{p^*}(\R^n)} \leq C \|D u\|_{L^p(\R^n)}$$

    where $p^* := \frac{np}{n - p}$.

    ??? proof
        **Step 1:** $p=1$

        The support of $u$ is compact, so for all $i = 1, \ldots, n$, there is an
        $x_i < \infty$ such that

        $$u(x) = \int_{-\infty}^{x_i} \partial_{x_i} u(x_1, \ldots, x_{i-1}, y_i, x_{i+1}, \ldots, x_n) \, dy_i$$

        Then, we get an upper bound

        $$|u(x)| \leq
        \int_{-\infty}^{\infty} |Du(x_1, \ldots, x_{i-1}, y_i, x_{i+1}, \ldots, x_n)|$$

        yielding

        $$|u(x)|^{\frac{n}{n-1}} \le
        \prod_{i=1}^{n}\left(\int_{-\infty}^{\infty} |Du(x_1, \ldots, y_i, \ldots, x_n)| \, dy_i\right)^{\frac{1}{n-1}}$$ 

        
        Then, integrating over $x_1$, and using the the Hölder inequality $(H.I.)$, we get

        $$
        \begin{align*}
            \int_{-\infty}^{\infty} |u(x)|^{\frac{n}{n-1}} \, dx_1
            &\le \int_{-\infty}^{\infty} \prod_{i=1}^{n}\left(\int_{-\infty}^{\infty} |Du(x_1, \ldots, y_i, \ldots, x_n)| \, dy_i\right)^{\frac{1}{n-1}} \, dx_1 \\
            &=\left(\int_{-\infty}^{\infty} |Du|\,dy_1\right)^{\frac{1}{n-1}}
            \int_{-\infty}^{\infty} \prod_{i=2}^{n} \left(\int_{-\infty}^{\infty} |Du|\,dy_i\right)^{\frac{1}{n-1}} \, dx_1 \\
            &\overset{H.I.}{\le} \left(\int_{-\infty}^{\infty} |Du|\,dy_1\right)^{\frac{1}{n-1}}
            \left(\prod_{i=2}^{n} \int_{-\infty}^{\infty}\int_{-\infty}^{\infty} |Du|\,dx_1\,dy_i\right)^{\frac{1}{n-1}}
        \end{align*}
        $$

        Now, we repat the last step for $x_2$:

        $$\int_{-\infty}^{\infty} \int_{-\infty}^{\infty}
        |u(x)|^{\frac{n}{n-1}} \, dx_1 \, dx_2
        \le \left(\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} |Du|\,dx_1\,dy_2\right)^{\frac{1}{n-1}}
        \prod_{i=3}^{n} I_i^{\frac{1}{n-1}}\, dx_2 =:K$$

        where $\displaystyle I_i := \int_{-\infty}^{\infty} |Du|\,dx_1\,dy_i$. Again, using
        $(H.I.)$, we get

        $$K \le \left(\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} |Du|\,dx_1\,dy_2\right)^{\frac{1}{n-1}}
        \left(\int_{-\infty}^{\infty}\int_{-\infty}^{\infty} |Du|\,dy_1\,dx_2\right)^{\frac{1}{n-1}}
        \left(\prod_{i=3}^{n} \int_{-\infty}^{\infty}\int_{-\infty}^{\infty} |Du|\,dx_1\,dy_i\right)^{\frac{1}{n-1}}$$

        We repeat this process until we get

        $$
        \begin{align*}
            \int_{\R^n} |u|^{\frac{n}{n-1}} \, dx &\leq
            \prod_{i=1}^{n} \left(\int_{-\infty}^{\infty} \dots \int_{-\infty}^{\infty} |Du|\,dx_1\,\dots\,dy_i\,\dots\,dx_n\right)^{\frac{1}{n-1}} \\
            &= \left(\int_{\R^n} |Du|\,dx\right)^{\frac{n}{n-1}}
        \end{align*}
        $$

        and we get the desired inequality:

        $$\|u\|_{L^{n/(n-1)}(\R^n)} \leq \|Du\|_{L^1(\R^n)}$$

        **Step 2:** $1 < p < n$

        Let $v:=|u|^\gamma$ for some $\gamma > 1$. Then, we have

        $$|Dv| = |D(|u|^\gamma)| = \gamma |u|^{\gamma - 1} |Du|$$

        Then, by induction and $H.I.$, we have

        $$
        \begin{align*}
            \|v\|_{L^{n/(n-1)}(\R^n)}
            & = \left(\int_{\R^n} |u|^{\frac{\gamma n}{n-1}}\right)^{\frac{n-1}{n}} \\
            & \le \|Dv\|_{L^1(\R^n)} = \gamma \int_{\R^n} |u|^{\gamma - 1} |Du|\,dx \\
            & \overset{H.I.}{\le}
            \gamma \left(\int_{\R^n} |u|^{(\gamma-1)\frac{p}{p-1}}\right)^{\frac{p-1}{p}}
            \left(\int_{\R^n} |Du|^p\right)^{\frac{1}{p}} \\
        \end{align*}
        $$

        If we choose $\gamma$ such that $\frac{\gamma n}{n-1} = (\gamma-1)\frac{p}{p-1}$, we
        get for $p^* = \frac{np}{n-p}$:

        $$
        \begin{align*}
            \left(\int_{\R^n} |u|^{p^*}\right)^{\frac{n-1}{n}}
            &\le \frac{p(n-1)}{n-p} \left(\int_{\R^n} |u|^{p^*}\right)^{\frac{p-1}{p}}
            \left(\int_{\R^n} |Du|^p\right)^{\frac{1}{p}} \\
            \left(\int_{\R^n} |u|^{p^*}\right)^{\frac{1}{p^*}}
            &\le\frac{p(n-1)}{n-p} \left(\int_{\R^n} |Du|^p\right)^{\frac{1}{p}}
        \end{align*}
        $$

        which is the desired inequality.


??? remark "Remark 5.19"
    **Where does** $\bm{p^*}$ **come from?**

    Suppose you want to establish the inequality

    $$\|u\|_{L^q(\R^n)} \leq C \|D u\|_{L^p(\R^n)} \quad (1)$$

    for some $1 \leq p, q < \infty$. Choose any $0\not\equiv u \in C_c^\infty(\R^n)$ and
    define $u_\lambda(x) := u(\lambda x)$ for $\lambda > 0$. Then, by $(1)$, we have

    $$\|u_\lambda\|_{L^q(\R^n)} \leq C \|D u_\lambda\|_{L^p(\R^n)} \quad (2)$$

    Now, observe that

    $$\|u_\lambda\|_{L^q(\R^n)}^q = \int_{\R^n} |u(\lambda x)|^q \, dx
    = \frac{1}{\lambda^n} \int_{\R^n} |u(y)|^q \, dy
    = \frac{1}{\lambda^n} \|u\|_{L^q(\R^n)}^q$$

    Observe further that

    $$
    \begin{align*}
        \|D u_\lambda\|_{L^p(\R^n)}^p
        &= \int_{\R^n} \left|D \Big(u(\lambda x)\Big)\right|^p \, dx \\
        &= \lambda^p \int_{\R^n} |D u(\lambda x)|^p \, dx \\
        &= \lambda^{p - n} \int_{\R^n} |D u(y)|^p \, dy \\
        &= \lambda^{p - n} \|D u\|_{L^p(\R^n)}^p
    \end{align*} \quad\quad (3)
    $$

    so, by $(1)$, $(2)$, and $(3)$, we have

    $$\|u\|_{L^q(\R^n)}^q \leq C^q \lambda^{1+n/p-n/q} \|D u\|_{L^p(\R^n)}^p$$

    Then, for $\frac{n}{q} - \frac{n}{p} + 1\neq 0$, we end up with the cases

    $$
    \begin{cases}
        \|u\|_{L^q} \overset{\lambda\to0}{=} 0, & \frac{n}{q} - \frac{n}{p} + 1 > 0 \\
        \|u\|_{L^q} \overset{\lambda\to\infty}{=} 0, & \frac{n}{q} - \frac{n}{p} + 1 < 0
    \end{cases}
    $$

    which contradicts $u\not\equiv0$ and $u\in C_c^\infty(\R^n)$. Therefore, we must have
    $\frac{n}{q} - \frac{n}{p} + 1 = 0 \iff q = p^*$.

    
???+ theorem "Theorem 5.20"
    ## GNS on bounded sets <a id="t520"></a>

    $\begin{align*}
        \text{Let } & \Omega \subset \R^n \text{ be open and bounded s.t.} \\
        & \partial\Omega \in C^1
    \end{align*}$

    For $1 \leq p < n$, and $u \in W^{1,p}(\Omega)$, we that

    $$
    \left\{\begin{align*}
        &u \in L^{p^*}(\Omega) \\
        &\|u\|_{L^{p^*}(\Omega)} \leq C \|u\|_{W^{1,p}(\Omega)}, & C = C(n, p, \Omega)
    \end{align*}\right.
    $$

    ??? proof
        By the extension theorem [T.5.14](../3_extensions_traces#t514), we know that there
        exists an extension $\overline u = Eu \in W^{1,p}(\R^n)$ such that

        $$
        (*)\quad\begin{cases}
            \overline u = u \text{ in } \Omega \\
            \Supp u \text{ is compact} \\
            \|\overline u\|_{W^{1,p}(\R^n)} \leq C \|u\|_{W^{1,p}(\Omega)}
        \end{cases}
        $$

        Then, there exists a sequence $(u_m) \subset C_c^\infty(\R^n)$ such that
        $u_m \to \overline u$ in $W^{1,p}(\R^n)$. By the GNS inequality [T.5.18](#t518),
        we have

        $$\|u_m - u_n\|_{L^{p^*}(\R^n)} \leq C \|Du_m - Du_n\|_{L^p(\R^n)}$$

        As $(Du_m)$ is Cauchy in $L^p(\R^n)$, we have that $(u_m)$ is Cauchy in
        $L^{p^*}(\R^n)$, so $u_m \to \overline u$ in $L^{p^*}(\R^n)$. Taking the limit
        of

        $$\|u_m\|_{L^{p^*}(\R^n)} \leq C \|Du_m\|_{L^p(\R^n)}$$

        we get

        $$
        \begin{align*}
            \|u\|_{L^{p^*}(\Omega)} &= \|\overline u\|_{L^{p^*}(\Omega)} \\
            &\le \|u\|_{L^{p^*}(\R^n)} \\
            &\le C \|Du\|_{L^p(\R^n)} \\
            &\le C \|u\|_{W^{1,p}(\Omega)} \\
            &\overset{(*)}{\le} C \|u\|_{W^{1,p}(\R^n)}
        \end{align*}
        $$
???+ theorem "Theorem 5.21"
    ## Poincaré Inequality <a id="t521"></a>
    
    $\begin{align*}
        \text{Let } & \Omega \subset \R^n \text{ be open and bounded} \\
        & 1 \le p < n \\
        & u \in W_0^{1,p}(\Omega)
    \end{align*}$

    Then, $\forall\, q \in [1, p^*] \ \exists\, 0 < C = C(p, q, n, \Omega)$ such that

    $$\|u\|_{L^q(\Omega)} \leq C \|Du\|_{L^p(\Omega)}$$

    ??? proof
        As $u \in W_0^{1,p}(\Omega)$, there is a sequence $(u_m) \subset C_c^\infty(\Omega)$
        converging to $u$ in $W^{1,p}(\Omega)$. Extending these to $0$ outside of $\Omega$,
        we get by [GNS](#t518)

        $$\|u_m\|_{L^{p^*}(\Omega)} = \|u_m\|_{L^{p^*}(\R^n)} \leq C \|Du_m\|_{L^p(\R^n)}
        = C \|Du_m\|_{L^p(\Omega)} \quad(1)$$

        Thus, we have that

        $$\|u_m - u_k\|_{L^{p^*}(\Omega)} \leq C \|Du_m - Du_k\|_{L^p(\Omega)}$$

        and $(u_m)$ is Cauchy in $L^{p^*}(\Omega)$. Hence, there exists a
        $g \in L^{p^*}(\Omega)$ such that $\|u_m - g\|_{L^{p^*}(\Omega)} \to 0$. As
        $p^* > p$ and $|\Omega| < \infty$, we have that

        $$\int_\Omega |u_m - g|^p \le C \int_\Omega |u - g|^{p^*} \to 0$$

        so $u_m \to g$ in $L^p(\Omega)$, and $u = g$ a.e. in $\Omega$. Now, letting
        $m \to \infty$ in $(1)$, we get

        $$\|u\|_{L^{p^*}(\Omega)} \leq C \|Du\|_{L^p(\Omega)} \quad (2)$$

        Again, as $|\Omega| < \infty$, we have that $L^q(\Omega) \subseteq L^{p^*}(\Omega)$
        for all $q \in [1, p^*]$, so

        $$\|u\|_{L^q(\Omega)} \leq \|u\|_{L^{p^*}(\Omega)} \overset{(2)}{\leq} C \|Du\|_{L^p(\Omega)}$$


???+ remark "Remark 5.22"
    For the case $p = n$, we have

    $$W^{1,n}(\R^n) \subset L^q(\R^n) \quad \forall\, q \in [n, \infty)$$

    This does not hold for $q=\infty$. Take for example

    $$u(x) = \log\log\left(1 + \frac{1}{|x|}\right)$$

    Then, $u \in W^{1,n}\Big(B(0, 1)\Big) \setminus L^\infty\Big(B(0, 1)\Big)$.


???+ definition "Definition 5.23"
    ## Hölder semi-norm <a id="d523"></a>

    The Hölder semi-norm is defined as

    $$[u]_{C^{0,\gamma}(\overline \Omega)} := \sup_{x\neq y\in\Omega} \frac{|u(x) - u(y)|}{|x - y|^\gamma}$$

    Functions with finite Hölder semi-norm are called $\bm\gamma$**-Hölder continuous** in
    $\Omega$.

    ---

    $C^{k,\gamma}(\overline \Omega)$ denotes the space of all $u \in C^k(\overline \Omega)$
    such that the norm

    $$\|u\|_{C^{k,\gamma}(\overline \Omega)} :=
    \sum_{|\alpha|\le k} \|D^\alpha u\|_{C(\overline \Omega)}
    + \sum_{|\alpha|=k} [D^\alpha u]_{C^{0,\gamma}(\overline \Omega)}$$

    is finite.
    $\Big(C^{k,\gamma}(\overline \Omega), \|\cdot\|_{C^{k,\gamma}(\overline \Omega)}\Big)$
    is a Banach space.


???+ theorem "Theorem 5.24"
    ## Morrey's Inequality <a id="t524"></a>

    $\begin{align*}
        \text{Let } & u \in C_c^1(\R^n) \\
        & n < p \le \infty \\
        & \gamma = 1 - \frac{n}{p}
    \end{align*}$

    Then, there exists a $C = C(n, p) > 0$ such that

    $$\|u\|_{C^{0,\gamma}(\R^n)} \leq C \|u\|_{W^{1,p}(\R^n)}$$

    By density, this inequality holds for $W^{1,p}(\R^n)$ too.


???+ remark "Remark 5.25"
    By [P.I.](#t521), we have

    $$\|u\|_{L^p(\R^n)} \leq C \|Du\|_{L^p(\R^n)} \quad \forall\, u \in W_0^{1,p}(\R^n) \quad (*)$$

    For such functions we have

    $$
    \begin{align*}
        \|Du\|_{L^p(\Omega)} &\leq \|u\|_{W^{1,p}(\Omega)} \\
        & \le C \Big(\|u\|_{L^p(\Omega)} + \|Du\|_{L^p(\Omega)}\Big) \\
        & \overset{(*)}{\le} C \|Du\|_{L^p(\Omega)}
    \end{align*}
    $$

    Hence, $\wtilde{\|u\|}_{W^{1,p}(\Omega)} := \|Du\|_{L^p(\Omega)}$ is an equivalent
    Sobolev-norm for $W_0^{1,p}(\Omega)$.


???+ theorem "Theorem 5.26"
    $\begin{align*}
        \text{Let } & \Omega \subset \R^n \text{ be open and bounded s.t.} \\
        & \partial\Omega \in C^1 \\
        & n < p \le \infty \\
        & u \in W^{k,p}(\Omega)
    \end{align*}$

    $$
    \begin{align*}
        (1) \quad & \text{Assume } k < \frac{n}{p} \text{ and let } q \text{ be such that }
        \frac{1}{q} = \frac{1}{p} - \frac{k}{n}. \\
        & \quad \implies \begin{cases}
            u \in L^q(\Omega) \\
            \|u\|_{L^q(\Omega)} \leq C \|u\|_{W^{k,p}(\Omega)}, & C = C(n, p, k, \Omega)
        \end{cases} \\ \\
        (2) \quad & \text{Assume } k > \frac{n}{p} \text{ and let } \gamma = \begin{cases}
            \lfloor n/p\rfloor + 1 - \frac{n}{p}, & \frac{n}{p} \notin \N \\
            \text{any } \gamma \in (0, 1), & \frac{n}{p} \in \N
        \end{cases} \\
        & \quad \implies \|u\|_{C^{k-\lfloor n/p\rfloor-1,\gamma}(\overline \Omega)}
        \leq C \|u\|_{W^{k,p}(\Omega)}, \quad C = C(l, p, n, \gamma, \Omega)
    \end{align*}
    $$

    
???+ theorem "Theorem 5.27"
    ## Ascoli-Arzelà <a id="t527"></a>

    $\begin{align*}
        \text{Let } & (M, d) \text{ be a compact metric space} \\
        & K \subset C(M)
    \end{align*}$
    
    Then, TFAE:

    $$
    \begin{align*}
        (1) & \text{ $K$ is relatively compact} \\ \\
        (2) & \text{ $K$ is bounded} \\ \\
        (3) & \text{ $K$ is equicontinuous}
    \end{align*}
    $$


???+ theorem "Theorem 5.28"
    ## Relllich-Kondrachov

    $\begin{align*}
        \text{Let } & \Omega \subset \R^n \text{ be open and bounded s.t.} \\
        & \partial\Omega \in C^1 \\
        & 1 \le p < \infty
    \end{align*}$

    $$
    \begin{align*}
        p < n & \implies W^{1,p}(\Omega) \hookrightarrow\hookrightarrow L^q(\Omega)
        && \forall\, q \in [1, p^*] \quad \frac{1}{p^*} = \frac{1}{p} - \frac{1}{n} \\ \\
        p = n & \implies W^{1,p}(\Omega) \hookrightarrow\hookrightarrow L^q(\Omega)
        && \forall\, q \in [1, \infty) \\ \\
        p > n & \implies W^{1,p}(\Omega) \hookrightarrow\hookrightarrow C^{0,\alpha}(\overline \Omega)
        && \forall\, \alpha \in \left[0, 1-\frac{n}{p}\right)
    \end{align*}
    $$

    