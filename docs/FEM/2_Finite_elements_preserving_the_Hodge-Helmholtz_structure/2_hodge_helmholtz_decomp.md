# 2.2 Continuous Hodge-Helmholtz decompositions

Define $\H^\ell := \ker d^l \cap \ker d^*_\ell$. Then, we have the decomposition

$$W^\ell = d^{\ell-1} V^{\ell-1} + \H^\ell + d^*_{\ell+1} V^{\ell+1}.$$


???+ theorem "Theorem 2.2.1"
    ## Hodge-Helmholtz decomposition <a id="t221"></a>

    $$
    \begin{align*}
        L^2(\Omega)^3 &= \grad H^1_0(\Omega) \opp \H_\tau(\Omega) \opp \curl H(\curl; \Omega) \\
        &= \curl H_0(\curl; \Omega) \opp \H_{\bm n}(\Omega) \opp \grad H^1(\Omega)
    \end{align*}
    $$

    where the harmonic spaces are defined as

    $$
    \begin{align*}
        \H_\tau(\Omega) &:= H_0(\curl 0; \Omega) \cap H(\div 0; \Omega) &\quad(1)\\
        \H_{\bm n}(\Omega) &:= H_0(\div 0; \Omega) \cap H(\curl 0; \Omega)&\quad(2)
    \end{align*}
    $$

    and are the functions with vanishings tangential and normal traces. Their harmonic fields
    are respectively normal and tangential to the boundary.

The theorem follows from this lemma:

???+ lemma "Lemma 2.2.2"
    <a id="l222"></a>
    
    $$
    L^2(\Omega)^3 = 
    \begin{cases}
        \grad H^1_0(\Omega) \opp H(\div 0; \Omega) &\quad(1)\\
        \grad H^1(\Omega) \opp H_0(\div 0; \Omega) &\quad(2)\\
        \curl H_0(\curl; \Omega) \opp H(\curl 0; \Omega) &\quad(3) \\
        \curl H(\curl; \Omega) \opp H_0(\curl 0; \Omega) &\quad(4)
    \end{cases}
    $$

    ???+ proof
        For each case $L^2(\Omega)^3 = X \opp Y$, note that by
        [P.2.1.4](../1_de_rahm_closed_hilbert_complex/#p214),
        $X$ is closed. Thus, it remains to shpw that $Y = X^\perp$.

        === "$(1)$"
            === "$\subseteq$"
                $\begin{align*}
                    \text{Let } & \bm v \in (\nabla H^1_0(\Omega))^\perp \\
                    & \phi \in \D
                \end{align*}$

                Note that

                $\left\{\begin{align*}
                    \grad \phi \in H_0(\curl 0; \Omega) \\
                    \nabla H_0^1(\Omega) \subseteq H_0(\curl 0; \Omega)
                \end{align*}\right.$

                $\begin{align*}
                    & \implies \inner{\div \bm v}{\phi}_{\D'\times\D} = -\inner{\bm v}{\grad \phi} = 0 \\
                    & \implies \div \bm v = 0 \\
                    & \implies \bm v \in H(\div 0; \Omega)
                \end{align*}$

            === "$\supseteq$"
                $\begin{align*}
                    \text{Let } & \bm v \in H(\div 0; \Omega) \\
                    & \phi \in H_0^1(\Omega)
                \end{align*}$

                $\begin{align*}
                    & \implies \grad \phi \in H(\curl 0; \Omega) \\
                    & \implies \inner{\bm v}{\grad \phi} = -\inner{\div \bm v}{\phi} = 0 \\
                    & \implies \bm v \in (\nabla H^1_0(\Omega))^\perp
                \end{align*}$

        === "$(2)$"
            === "$\subseteq$"
                $\begin{align*}
                    \text{Let } & \bm v \in (\nabla H^1(\Omega))^\perp \\
                    & w \in H^1(\Omega)
                \end{align*}$
    
                Then, by the same arguments as in $(1)$, we have $\bm v \in H(\div 0; \Omega)$.
    
                ??? proof "Claim: $\inner{\grad w}{\bm v} = \inner{w}{\bm v \cdot \bm n}_{\partial \Omega}$"
                    $$
                    \begin{align*}
                        \inner{\grad w}{\bm v} &= \int_{\Omega} (\grad w) \cdot \bm v \,dx \\
                        &= \int_{\Omega} \Big(\div(\bm v w) - w \div \bm v\Big) \,dx \\
                        &= \int_{\partial \Omega} w\ \bm v \cdot \bm n \,d\s \\
                        &= \inner{w}{\bm v \cdot \bm n}_{\partial \Omega}
                    \end{align*}
                    $$

                We have that
                $0=\inner{w}{\bm v \cdot \bm n}_{\partial \Omega} = \inner{\gamma_0 w}{\gamma_{\bm n} \bm v}_{H^{-1/2}(\partial \Omega) \times H^{1/2}(\partial \Omega)}$
                and $\gamma_0 : H^1(\Omega) \to H^{1/2}(\partial \Omega)$ is surjective.

                $\begin{align*}
                    & \implies \gamma_{\bm n} \bm v = 0 \\
                    & \implies \bm v \in H_0(\div 0; \Omega)
                \end{align*}$

            === "$\supseteq$"
                $\begin{align*}
                    \text{Let } & \bm v \in H_0(\div 0; \Omega) \\
                    & w \in H^1(\Omega)
                \end{align*}$

                $\begin{align*}
                    & \implies \inner{\bm v}{\grad w} = -\inner{\div \bm v}{w} = 0 \\
                    & \implies \bm v \in (\nabla H^1(\Omega))^\perp
                \end{align*}$

        === "$(3)$"
            === "$\subseteq$"
                $\begin{align*}
                    \text{Let } & \bm v \in \Big(\curl H_0(\curl; \Omega)\Big)^\perp \\
                    & \bm w \in \D^3 \subseteq H_0(\curl; \Omega)
                \end{align*}$

                $\begin{align*}
                    & \implies \curl \bm w \in \curl H_0(\curl; \Omega) \\
                    & \implies \inner{\curl \bm v}{\bm w}_{(\D')^3 \times \D^3} = \inner{\bm v}{\curl \bm w} = 0 \\
                    & \implies \curl \bm v = 0 \\
                    & \implies \bm v \in H(\curl 0; \Omega)
                \end{align*}$

            === "$\supseteq$"
                $\begin{align*}
                    \text{Let } & \bm v \in H(\curl 0; \Omega) \\
                    & \bm w \in H_0(\curl; \Omega)
                \end{align*}$

                $\begin{align*}
                    & \implies \inner{\bm v}{\curl \bm w} = \inner{\curl \bm v}{\bm w} = 0 \\
                    & \implies \bm v \in \Big(\curl H_0(\curl; \Omega)\Big)^\perp
                \end{align*}$
                
        === "$(4)$"
            === "$\subseteq$"
                $\begin{align*}
                    \text{Let } & \bm v \in \Big(\curl H(\curl; \Omega)\Big)^\perp \\
                    & \bm w \in \D^3 \subseteq H(\curl; \Omega)
                \end{align*}$

                $\implies \curl \bm w \in \curl H(\curl; \Omega)$

                ??? proof "Claim: $\inner{\curl\bm v}{\bm w} = \inner{\bm n \times \bm v}{\bm w}_{\partial \Omega}$"
                    $$
                    \begin{align*}
                        \inner{\curl\bm v}{\bm w} &= \int_{\Omega} \curl\bm v \cdot \bm w \,dx \\
                        &= \int_{\Omega} \Big(\div(\bm v \times \bm w) + \bm v \cdot \curl \bm w\Big) \,dx \\
                        &= \int_{\partial \Omega} (\bm v \times \bm w) \cdot \bm n \,d\s
                        + \int_{\Omega} \bm v \cdot \curl \bm w \,dx \\
                        &= \int_{\partial \Omega} (\bm n \times \bm v) \cdot \bm w \,d\s \\
                        &= \inner{\bm n \times \bm v}{\bm w}_{\partial \Omega}
                    \end{align*}
                    $$

                Note that $\bm v$ is curl-free, so
                $\inner{\bm n \times \bm v}{\bm w}_{\partial \Omega} = 0$. Moreover, we have

                $\begin{align*}
                    & \inner{\bm n \times \bm v}{\bm w}_{\partial \Omega}
                    = \inner{\gamma_{\bm \tau}{\bm v}}{\gamma_0 \bm w}_{H^{-1/2}(\partial \Omega) \times H^{1/2}(\partial \Omega)} \\
                    & \implies \gamma_{\bm \tau} \bm v = 0 \\
                    & \implies \bm v \in H_0(\curl 0; \Omega)
                \end{align*}$

            === "$\supseteq$"
                $\begin{align*}
                    \text{Let } & \bm v \in H_0(\curl 0; \Omega) \\
                    & \bm w \in H(\curl; \Omega)
                \end{align*}$

                $\begin{align*}
                    & \implies \curl \bm w \in \curl H(\curl; \Omega) \\
                    & \implies \inner{\bm v}{\curl \bm w} = \inner{\curl \bm v}{\bm w} = 0 \\
                    & \implies \bm v \in \Big(\curl H(\curl; \Omega)\Big)^\perp
                \end{align*}$