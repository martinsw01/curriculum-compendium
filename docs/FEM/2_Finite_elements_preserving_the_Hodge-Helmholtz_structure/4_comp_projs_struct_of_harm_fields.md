# 2.4 Computing projections and the structure of harmonic fields

When dealing with sequences of discrete spaces, we are naturally led to work with sequences
of projection operators of the form

$$\Pi_h^\ell : U^\ell \to V_h^\ell,$$

with domain spaces $U^\ell \subseteq V^\ell$ dense in $V^\ell$. In practice it is convenient
to consider the inhomogeneous sequence

$$\overline V^0:=H^1(\Omega) \xrightarrow{\bm\grad} \overline V^1 := H(\curl, \Omega)
\xrightarrow{\curl} \overline V^2 := L^2(\Omega)$$

with discrete spaces $\overline V_h^\ell \subseteq \overline V^\ell$, and define the
commuting projection operator

$$\overline \Pi_h^\ell : \overline U^\ell \to \overline V_h^\ell$$

such that the following property hods:

???+ definition "Definition 2.4.1"
    ## Commuting diagram property

    $\overline \Pi_h^\ell$ satisfy the commuting diagram property if

    $$
    \begin{align*}
        \bm\grad \overline \Pi_h^0 \phi & = \overline \Pi_h^1 \bm\grad \phi
        & \forall\, \phi \in \overline U^1 \\
        \curl \overline \Pi_h^1 \bm v &= \overline \Pi_h^2 \curl \bm v
        & \forall\, \bm v \in \overline U^2
    \end{align*}
    $$

If the projection preserves the homogeneous boundary conditions, we can define

$$\Pi_h^\ell := \overline \Pi_h^\ell|_{U^\ell}.$$

The above property allows us to preserve the structure of harmonic fields at the discrete
level.


???+ proposition "Proposition 2.4.2"
    The discrete harmonic fields

    $$\H_{\bm\tau,h} = \ker \curl_h \cap \ker \wtilde\div_h$$

    has the same dimension as $\H_{\bm\tau}$.

    ??? proof
        First, we prove that

        $$
        \bm u\in \H_{\bm\tau} \iff
        \left\{\begin{align*}
            \curl \bm u = \div \bm u &= 0 \\
            \bm \tau \cdot \bm u &= 0 \text{ on } \partial\Omega
        \end{align*}\right\} \overset{(*)}{\iff}
        \left\{\begin{aligned}
            \exists\, \phi &\in H^1(\Omega) \text{ s.t. } \\
            &\bm u = \bm\grad \phi \\
            &\Delta \phi = 0 \\
            &\phi = c_i \text{ on } \Gamma_i
        \end{aligned}\right\}
        $$

        where $\Gamma_i$ are the boundaries of the connected components of $\partial\Omega$,
        i.e. the boundaries of the holes in the domain.

        ??? proof "Claim: $(*)$ holds."
            The left implication $(\impliedby)$ is clear.

            $\begin{align*}
                \text{Let } & \gamma : [0, 1] \to \Omega \text{ be a smooth curve s.t.} \\
                & \gamma(0) \in \Gamma_0, \gamma(1) = x
            \end{align*}$

            Further, set

            $$\phi_\gamma(x) := \int_0^1 \gamma'(s) \cdot u(\gamma(s))\, ds.$$

            and let $\tilde \gamma : \gamma(0) \leadsto x$ be another $C^1$ path.
            Extend $\gamma : [0, 2] \to \Omega$ to include $\tilde \gamma$ and
            form a closed curve. This encloses the domain $\Omega_\gamma$. Either,
            this contains some holes, or it does not. In the second case, we have
            $\gamma = \partial\Omega_\gamma$ and

            $$
            \begin{align*}
                \phi_\gamma(x) - \phi_{\tilde\gamma}(x)
                &= \int_0^1 \gamma'(s) \cdot \bm u(\gamma(s))\, ds
                - \int_0^1 \tilde\gamma'(s) \cdot \bm u(\tilde\gamma(s))\, ds \\
                &= \int_\gamma \bm \tau \cdot \bm u\, d\s
                - \int_{\tilde\gamma} \bm \tau \cdot \bm u\, d\s \\
                &= \int_{\Omega_\gamma} \curl \bm u\, dx \\
                &= 0
            \end{align*}
            $$

            Assume, on the other habd, that $\gamma$ encloses one hole
            with boundary $\Gamma_i$ parametrized by $\tilde \gamma_i$. From
            the homogeneous tangential boundary conditions, we have

            $$\int_0^1 \tilde\gamma_i'(s) \cdot \bm u(\tilde\gamma_i(s))\, ds
            = \pm \int_{\Gamma_i} \bm \tau \cdot \bm u\, d\s = 0$$

            so that

            $$
            \begin{align*}
                \phi_\gamma(x) - \phi_{\tilde\gamma}(x)
                &= \int_0^2 \gamma'(s) \cdot \bm u(\gamma(s))\, ds \\
                &= \int_0^2 \gamma'(s) \cdot \bm u(\gamma(s))\, ds
                + \int_0^1 \tilde\gamma_i'(s) \cdot \bm u(\tilde\gamma_i(s))\, ds \\ 
                &= \pm\int_{\partial\Omega_\gamma} \bm \tau \cdot \bm u\, d\s \\
                &= \pm \int_{\Omega_\gamma} \curl \bm u\, dx \\
                &=0.
            \end{align*}
            $$

            Thus, $\phi_\gamma(x)$ depends only on $x$, and not on $\gamma$. Then,
            using straight lines, we can show that $\grad \phi = \bm u$.
            The tangential boundary contition also requires $\phi$ to be constant
            on the boundaries of the holes.
            
        Thus, $\H_{\bm\tau}$ is spanned by $\bm\grad \phi_i$ where the $\phi_i$
        are the unique solutions to

        $$\left\{\begin{align*}
            \Delta \phi_i &= 0 && \text{ in } \Omega \\
            \phi_i &= \delta_{i,j} && \text{ on } \Gamma_j
        \end{align*}\right.$$

        So the dimension of $\H_{\bm\tau}$ is the number of holes in $\Omega$.
        It then remains to show that the dimension of $\H_{\bm\tau,h}$ is the same.

        $\begin{align*}
            &\text{Let } \bm v_h \in \H_{\bm\tau,h} \\
            & \implies \exists\, \phi \in H^1(\Omega) : \bm v_h = \bm\grad \phi \\
            & \implies \bm v_h = \Pi_h^1 \bm v_h = \Pi_h^1 \bm\grad \phi
            = \bm\grad \Pi_h^0 \phi\\
            & \text{Let } \phi_h := \Pi_h^0 \phi \in V_h^0
        \end{align*}$

        If $\bm n \times \bm v_h = 0$ on $\Gamma_i$, then $\phi_h$ is constant on
        $\Gamma_i$, and

        $$
        \begin{align*}
            \wtilde\div_h \bm v_h = 0 &\implies \div_h\bm\grad \phi_h = 0 \\
            &\iff \inner{\bm\grad \phi_h}{\bm\grad \psi_h} = 0
            \quad \forall\, \psi_h \in V_h^0 \quad (P)
        \end{align*}
        $$

        This is the standard Galerkin approximation of the Poisson problem with dirichlet
        boundary condition. This is always well posed, as it inherits the coercivity
        from the continuous one. Thus, the space of solutions (and $\H_{\bm\tau,h}$) is
        then spanned by the solutions $\phi_{h,i}$ to $(P)$ with
        $\phi_{h,i} = \delta_{i,j}$ on $\Gamma_j$.


[//]: # (???+ example "Example 2.4.4")

[//]: # (    $$)

[//]: # (    \begin{matrix})

[//]: # (        V_h^0 = \R & \xrightarrow{\iota} & V_h^1 = \mathbb P_p&#40;0, 1&#41;)

[//]: # (        & \xrightarrow{\partial_x} & V_h^2 = \mathbb P_{p-1}&#40;0, 1&#41;)

[//]: # (        & \xrightarrow{0} & V_h^3 = \{0\} \\)

[//]: # (        V^0 = \R & \xrightarrow{\iota} & V^1 = C^1&#40;0, 1&#41;)

[//]: # (        & \xrightarrow{\partial_x} & V^2 = C&#40;0, 1&#41; & \xrightarrow{0} & V^3 = \{0\})

[//]: # (    \end{matrix})

[//]: # (    $$)

[//]: # ()
[//]: # (    $\begin{align*})

[//]: # (        & \text{Let } v \in V^1 \\)

[//]: # (        & \implies \exists\, q_i \in \mathbb P_i&#40;0, 1&#41; : v = )

[//]: # (    \end{align*}$)