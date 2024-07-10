# 4.3 Poincaré-Friedrichs inequalities and Stability through commuting projections

<span style="display: none">
    $\newcommand{\B}{\mathfrak{B}}$
    $\newcommand{\H}{\mathfrak{H}}$
    $\newcommand{\Z}{\mathfrak{Z}}$
    $\newcommand{\L}{\mathcal{L}}$
</span>
We have shown that the discrete Hodge-Laplace problem is well-posed
[T.3.3.4](../3_well-posedness#t334), but notice that $c_{P,h}$ depends a priori on the mesh
resolution $h$. Thus, it may blow up with thr dimension of the discrete spaces. Hence, for fine
meshes, the stability bound would become useless.

???+ lemma "Lemma 3.4.1"
    ## Discrete Poincaré inequality <a id="l341"></a>

    If the discrete complex admits commuting projection operators $\pi_h$ which are uniformly
    $V$-bounded with respect to $h$,then the discrete
    [Poincaré inequality](../3_well-posedness#l331) holds with a 
    $c_{P,h}$ independent of $h$.

    ??? proof
        Let $u_h \in \Z_h^{\ell\perp}$. The goal is to use the generalized Poincaré inequality
        [P.I.](../3_well-posedness#l331). However, we cannot project $u_h$ to
        $\Z^{\ell\perp}$, as it is not closed.

        Now, let $P_{\Z^\ell}$ be the $W$-orthogonal projection onto $\Z^\ell$ (which is
        closed) and $u = u_h - P_{\Z^\ell} u_h$. Then we have

        $$
        \begin{cases}
            u \in V^\ell \\
            d^\ell u = d^\ell(u_h - P_{\Z^\ell} u_h) = d^\ell u_h \tag{i}
        \end{cases}
        $$

        ??? proof "Claim: $u\in\Z^{\ell\perp}$"
            $\begin{align*}
                & \text{Let } z \in \Z^\ell \\
                & \implies \inner{u}{z} = \inner{u_h}{z} - \inner{P_{\Z^\ell} u_h}{z}
                = \inner{u_h}{z} - \inner{u_h}{P_{\Z^\ell} z} = 0 \\
                & \implies u \in \Z^{\ell\perp}
            \end{align*}$

        Then, we have by $(P.I.)$ and $(i)$ that

        $$\|u\|_V \le c_P\|d^\ell u_h\| \tag{ii}$$

        ??? proof "Claim: $\inner{u_h}{u_h} = \inner{u_h}{\pi_h^\ell u}$"
            First of all, we have that $\pi_h^\ell \Z^\ell \subseteq \Z_h^\ell$:

            $\begin{align*}
                & \text{Let } z \in \Z^\ell \\
                & \implies d^\ell \pi_h^\ell z = \pi_h^{\ell+1} d^\ell z = 0 \\
                & \implies \pi_h^\ell z \in \Z_h^\ell
            \end{align*}$

            Now, $u-u_h \in \Z^\ell$ and $u_h \in \Z_h^{\ell\perp}$.

            $\begin{align*}
                & \implies \inner{u_h}{\pi_h^\ell(u-u_h)} = 0 \\
                & \implies \inner{u_h}{u} = \inner{u_h}{\pi_h^\ell u}
            \end{align*}$

        Combining this claim and $(ii)$, we have

        $$
        \begin{align*}
            \|u_h\|^2 = \inner{u_h}{u_h} &= \inner{u_h}{\pi_h^\ell u} \\
            &\le \|u_h\| \|\pi_h^\ell u\| \\
            \|u_h\| &\le \|\pi_h^\ell\| \|u\| \\
            &\le c_P \|\pi_h^\ell\| \|d^\ell u_h\|
        \end{align*}
        $$

        This results in

        $$
        \begin{align*}
            \|u_h\|_V^2 &= \|u_h\|^2 + \|d^\ell u_h\|^2 \\
            &\le c_P^2 \|\pi_h^\ell\|^2 \|d^\ell u_h\|^2 + \|d^\ell u_h\|^2 \\
            &=\left(c_P^2 \|\pi_h^\ell\|^2 + 1\right) \|d^\ell u_h\|^2
        \end{align*}
        $$

        So we get the Poincaré constant $c_{P,h} = \sqrt{c_P^2 \|\pi_h^\ell\|^2 + 1}$, which
        is bounded independently of $h$.

        
We conclude with a general, nut useful observation: As $\pi_h$ is a uniformly bounded
projection, it is a quasi-optimal approximation operator

$$\|w - \pi_h w\| \le C\inf_{v_h\in V_h} \|w - v_h\|$$

with $C \ge 1+\|\pi_h\|_V$ is a bound independent of $h$.

??? proof
    We can decompose $w - \pi_h w = w - v + \pi_h(w - v)$ for any $v\in V_h$. Then, we have

    $$
    \begin{align*}
        \|w - \pi_h w\|_V &\le \|w - v\|_V + \|\pi_h(w - v)\|_V \\
        &\le \inf_{v_h\in V_h} \|w - v_h\|_V + \|\pi_h\|_V \inf_{v_h\in V_h} \|w - v_h\|_V \\
        = C \inf_{v_h\in V_h} \|w - v_h\|_V
    \end{align*}
    $$

    where $C \ge 1+\|\pi_h\|_V$ is a bound independent of $h$.

???+ remark "Remark 3.4.2"
    If $\pi_h$ is also uniformly bounded in $W$, the approximations are $W$-optimal:

    $$\|w - \pi_h w\| \le C\inf_{v_h\in V_h} \|w - v_h\|$$

    and from the commuting diagram property, we have a quasi-optimal approximation for the
    differential:

    $$\|d(w - \pi_h w)\| \le C\inf_{\xi_h \in V_h^{\ell+1}} \|dw - \xi_h\|$$