# 2.6 Commuting projections with geometric interpolations

$\newcommand{\x}{\bm{\text{x}}}$
$\newcommand{\Epsilon}{\mathcal{E}}$

We define the projections $\Pi_h^\ell : C(\Omega) \to V_h^\ell$

$$
\left\{\begin{align*}
    \Pi_h^0 : \phi & \mapsto \sum_{\x_i \in \V_{h,0}} \s_i^0(\phi) \Lambda_i^0 \\
    \Pi_h^1 : \bm v & \mapsto \sum_{e_i \in \Epsilon_{h,0}} \s_i^1(\bm v) \bm\Lambda_i^1 \\
    \Pi_h^2 : w & \mapsto \sum_{K_i \in \Tau_h} \s_i^2(w) \Lambda_i^2
\end{align*}\right.
$$

which can be characterized by a "finite element interpolation" property:

$$\Pi_h^\ell v \in V_h^\ell, \quad \s_i^\ell(\Pi_h^\ell v) = \s_i^\ell(v) \quad \forall\, i = 1, \dots, N^\ell$$

We define these projections on continuous functions because in $H^1$ or $H(\curl)$, the point values
and edge circulations are not well-defined. Similarly, we define the projections for the
inhomogeneous spaces.

Note that, for $\phi: \phi = 0$ and $\bm v: \bm v \cdot \bm \tau = 0$ on $\partial\Omega$, the
projections $\overline \Pi_h^\ell$ and $\Pi_h^\ell$ coincide.

???+ proposition "Proposition 2.6.2"
    ## Commuting diagram property <a id="p262"></a>

    The projections $\overline \Pi_h^\ell$ satisfy the commuting diagram property with the spaces
    $\overline U^0 = H^1(\Omega) \cap C^0(\overline \Omega)$ and
    $\overline U^1 = H(\curl, \Omega) \cap C^0(\overline \Omega)$.

    ???+ proof
        Let $e_i = (\x_j, \x_k) \in \Epsilon_h$ be parametrized by
        $\bm x_{e_i} : s \mapsto \x_j + s(\x_k - \x_j)$.

        $$
        \begin{align*}
            \s_i^1(\bm\grad \phi) &= \int_{e_i} \bm\tau_i \cdot \bm\grad \phi \\
            &= |e_i| \int_0^1 (\bm \tau_i \cdot \bm\grad \phi)(\bm x_{e_i}(s)) \, ds \\
            &= \int_0^1 \frac{d}{ds} \phi(\bm x_{e_i}(s)) \, ds \\
            &= \phi(\x_k) - \phi(\x_j) \\
            &= \s_k^0(\phi) - \s_j^0(\phi) 
        \end{align*}
        $$

        This results in

        $$
        \begin{align*}
            \s_i^1(\overline\Pi_h^1 \bm\grad \phi)
            &= \s_i^1(\bm\grad \phi) \\
            &= \s_k^0(\phi) - \s_j^0(\phi) \\
            &= \s_k^1(\overline\Pi_h^0 \phi) - \s_j^1(\overline\Pi_h^0 \phi) \\
            &= \s_i^1(\bm\grad \overline\Pi_h^0 \phi)
        \end{align*}
        $$

        so $\bm\grad \overline\Pi_h^0 \phi$ and $\overline\Pi_h^1 \bm\grad \phi$ share the same
        degrees of freedom. Thus, they are the same.

        The proof for $\curl$ is analogous.


???+ corollary "Corollary 2.6.3"
    ## Commuting projections with homogeneous boundary conditions

    The projections $\Pi_h^\ell$ satisfy the commuting diagram property with the spaces
    $U^0 = H^1_0(\Omega) \cap C^0(\overline\Omega)$ and
    $U^1 = H_0(\curl, \Omega) \cap C^0(\overline\Omega)$.

    $$
    \begin{matrix}
        H_0^1(\Omega) & \xrightarrow{\bm\grad} & H_0(\curl, \Omega) & \xrightarrow{\curl} & L^2(\Omega) \\
        \downarrow \Pi_h^0 & & \downarrow \Pi_h^1 & & \downarrow \Pi_h^2 \\
        V_h^0 & \xrightarrow{\bm\grad} & V_h^1 & \xrightarrow{\curl} & V_h^2
    \end{matrix}
    $$