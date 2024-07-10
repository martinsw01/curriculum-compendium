# 3.3 Well-posedness of the Hodge-Laplace problem

<span style="display: none">
    $\newcommand{\B}{\mathfrak{B}}$
    $\newcommand{\H}{\mathfrak{H}}$
    $\newcommand{\Z}{\mathfrak{Z}}$
    $\newcommand{\L}{\mathcal{L}}$
</span>
We will study the well-posedness (existence, unicity, and stability) of the abstract
Hodge-Laplace equestions. A compact form reads

$$
\begin{align*}
    &\text{Find } x \in X \text{ s.t.} \\
    &\quad b(x,y) = \ell_f(y) \quad \forall\, y \in Y.
\end{align*} \label{hodge-laplace}\tag{H-L}
$$

where $X = V^{l-1} \times V^\ell \times \H^\ell$ is equipped with the norm

$$\|(\tau, v, q)\|_X^2 = \|\tau\|_V^2 + \|v\|_V^2 + \|q\|^2.$$

and

$$
\begin{align*}
    b(\s, u, p; \tau, v, q)
    &:= \inner{\s}{\tau} - \inner{d\tau}{u} + \inner{d\s}{v}
    + \inner{du}{dv} + \inner{p}{v} - \inner{q}{u} \\
    \ell_f(\tau, v, q) &:= \inner{f}{v}.
\end{align*}
$$

The theory from section $C$ tells us that the well-posedness can be established by the
$T$-coercivity of $b$.

???+ lemma "Lemma 3.3.1"
    ### Generalized Poincaré inequality <a id="l331"></a>

    For $l \in \{\ell-1, \ell\}$, there exists a constant $c_P \ge 1$ such that

    $$\|v\|_V \le c_P\|d^l v\|
    \quad \forall\, v \in V^l \cap (\Z)^{\perp_W} =: \Z^{l\perp}$$

    ??? proof
        Let $d_\operatorname{res}^l := d^l : \Z^{l\perp} \to \B^{l+1}$. Then,
        $d_\operatorname{res}^l$ a bijection. The lemma is equivalent to the inverse
        $(d_\operatorname{res}^l)^{-1} : \B^{l+1} \to \Z^{l\perp}$ being bounded in
        $V^{l+1}$.

        By Banach's bounded inverse theorem, it is sufficient to show that for
        $d_\operatorname{res}^l$ is a bounded bijection between Banach spaces. Now, let
        $u\in V^l$.

        $\begin{align*}
            & \implies \|d^l v\|_V^2 = \|d^l v\|^2 + \|d^{l+1} d_l v\|^2 = \|d^l v\|^2
            \le \|v\|_V^2 \\
            & \implies V^l \text{ is Banach}
        \end{align*}$

        Then, it remains to show that $\Z^{l\perp}$ and $\B^{l+1}$ are closed in $V^l$:

        $\Z^{l\perp}$ is an orthogonal complement, so it is closed. $\B^{l+1}$ is the
        assumed closed with the *closed Hilbert complex property*.


???+ lemma "Lemma 3.3.2"
    ### Stability

    The form $b$ is $T$-coercive, i.e. there exists a bijective linear operator
    $T : X \to X$ and $C>0$ such that

    $$
    \left.\begin{align*}
        \|Tx\|_X &\le C\|x\|_X \\
        b(x, Tx) &\ge \frac{C}{c_P^2} \|x\|_X^2
    \end{align*}\right\}\quad \forall\, x \in X
    $$

    where $c_P$ is the Poincaré constant from [L.3.3.1](#l331).

    ??? proof
        Let $u\in V^\ell$. By the Hodge-Helmholtz decomposition, we have that

        $$u = u_\B + u_\H + u_{\B^*} \in \B^\ell \opp \H^\ell \opp \B_{\ell+1}^*.$$

        As the orthogonality holds in both $V^\ell$ and $W^\ell$, we have

        $$
        \begin{align*}
            \|u\|^2 &= \|u_\B\|^2 + \|u_\H\|^2 + \|u_{\B^*}\|^2 \\
            \|u\|_V^2 &= \|u_\B\|_V^2 + \|u_\H\|_V^2 + \|u_{\B^*}\|_V^2
        \end{align*} \tag{i}
        $$

        Further, let $\rho \in \Z^{\ell-1, \perp} : d\rho = u_\B$. Then, by the Poincaré
        inequality [L.3.3.1](#l331), $\rho$ is bounded and unique:

        $$\|\rho\|_V \le c_P\|d\rho\| = c_P\|u_\B\| \tag{ii}$$

        Further, as $u_{\B^*} = u - (u_\B + u_\H) \in V^\ell$, and
        $u_{\B^*} \in \B_{\ell}^* = (\Z^\ell)^{\perp_W}$, we have that
        $u_{\B^*} \in \Z^{\ell\perp}$. Again, by the Poincaré inequality, we have

        $$\|u_{\B^*}\|_V \le c_P\|d u_{\B^*}\| = c_P\|d u_{\B^*}\| \tag{iii}$$

        Finally, we define

        $$
        \begin{align*}
            T : V^{l-1} \times V^\ell \times \H^\ell & \toself \\
            (\s, u, p) & \mapsto (\tau, v, q)
        \end{align*}
        $$

        with

        $$
        \begin{cases}
            \tau := \s - \frac{1}{c_P} \rho \\
            v := u - d\s + p \\
            q := p - u_\H
        \end{cases}
        $$

        Then, by $(i)$ and $(iii)$, we have that $T$ is bounded:

        $$
        \begin{align*}
            \|T(\s, u, p)\|_X^2 &= \|\tau\|_V^2 + \|v\|_V^2 + \|q\|^2 \\
            &\le C\left(1+\frac{1}{c_P^2}\right)\|(\s, u, p)\|_X^2 \\
            &\le 2C\|(\s, u, p)\|_X^2
        \end{align*}
        $$

        Now, it remains to show the lower bound for $b(x, Tx)$:

        As $d$ vanishes on $\B^\ell$ and $\H^\ell$, we have

        $$b(x, Tx) = \|\s\|_V^2 + \|du\|^2 + \|p\|^2 + \|u_\H\|^2
        + \frac{1}{c_P^2} \|u_\B\|^2 - \frac{1}{c_P^2} \inner{\s}{\rho} \tag{iv}$$

        Additionally, we have the bounds

        $$
        \begin{align*}
            \frac{1}{c_P^2} |\inner{\s}{\rho}| \le \frac{1}{c_P^2} \|\s\|\|\rho\|
        \overset{(ii)}{\le} \frac{1}{c_P} \|\s\|\|u_\B\|
        \le \frac{1}{2} \|\s\|^2 + \frac{1}{2} \frac{1}{c_P^2} \|u_\B\|^2 \\
        \|u\|_V^2 \overset{(i)+(iii)}{\le} \|u_\B\|^2 + \|u_\H\|^2 + c_P^2\|d u\|^2
        \le c_P^2\left(\frac{1}{c_P^2} \|u_\B\|^2 + \|u_\H\|^2 + \|du\|^2\right)
        \end{align*}
        $$

        Inserting these into $(iv)$, we obtain

        $$b(x, Tx) \ge C\left(\|\s|_V^2 + \frac{1}{c_P^2}\|u\|_V^2 + \|p\|^2\right)
        \ge \frac{C}{c_P^2}\|(\s, u, p)\|_X^2$$

        so $b$ is $T$-coercive.

???+ theorem "Theorem 3.3.3"
    ### Well-posedness

    The Hodge-Laplace problem is well posed:

    For all $f\in (V^\ell)'$, it admits a unique solution $(\s, u, p) \in X$ and it is
    stable:

    $$\|\s\|_V + \|u\|_V + \|p\| \le C c_P^2 \|f\|_{V'}$$

    with $C$ and $c_P$ as in [L.3.3.2](#l332).
    
    ???+ proof
        Follows directly from [L.3.3.2](#l332) and C.C.2.3.


???+ theorem "Theorem 3.3.4"
    ### Well-posedness of the FEM approximation

    The FEM approximation of the Hodge-Laplace problem is well-posed:

    For all $f \in (V^\ell)'$, it admits a unique solution $(\s_h, u_h, p_h) \in X_h$ and
    it is stable:

    $$\|\s_h\|_V + \|u_h\|_V + \|p_h\| \le C c_{P,h}^2 \|f\|_{V'}$$

    ???+ proof
        Analogous to [T.3.3.3](#t333), using the discrete
        Hodge-Helmholtz decomposition and the discrete Poincaré inequality (which also
        holds, as the discrete complex is also a closed Hilbert complex).

