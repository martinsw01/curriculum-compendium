# 2.1 The de Rahm sequence as a closed Hilbert complex

Again we have the maximal primary sequence with Dirichlet boundary conditions and it's dual:

$$
\begin{matrix}
    V^0 = H^1_0(\Omega) & \xrightarrow{d^0 = \grad} & V^1 = H_0(\curl; \Omega) & \xrightarrow{d^1 = \curl}
    & V^2 = H_0(\div; \Omega) & \xrightarrow{d^2 = \div} & V^3 = L^2(\Omega) \\
    V_0^* = H^1(\Omega) & \xleftarrow{d_1^* = -\div} & V_1^* = H(\div; \Omega) & \xleftarrow{d_2^* = \curl}
    & V_2^* = H(\curl; \Omega) & \xleftarrow{d_3^* = -\grad} & V_3^* = H^1(\Omega)
\end{matrix}
$$

Further, denote by $W^\ell$ the $L^2$-space containing $V^\ell$:

$$W^0 = W^3 = L^2(\Omega), \quad W^1 = W^2 = L^2(\Omega)^3$$


??? theorem "Theorem 2.1.1"
    ## Poincaré-Friedrichs inequalities <a id="t211"></a>

    $$
    \begin{align*}
        \forall \ &\ell \in \{0, 1, 2\}\ \exists\ c_p = c_p(\ell, \Omega) \text{ s.t.} \\ \\
        & \|v\| \le c_p \|d^\ell v\| \quad \forall\ v \in V^\ell \cap (\ker d^\ell)^\perp
    \end{align*}
    $$

    with orthogonality in $L^2$.

    ??? proof
        === "$\ell\in\{0,3\}$"
            Corresponds to the standard Poincaré and Pointcaré-Wirtinger inequalities.

        === "$\ell=1$"
            Recall that $d_1^* = -\div$ and $V_1^* = H(\div; \Omega)$. Assume that the theorem
            does not hold.

            $$
            \begin{align*}
                \implies \exists\ v_n &\in H(\div; \Omega) \cap H(\div 0; \Omega)^\perp \text{ s.t.} \\
                &\|v_n\| \ge n \|\div v_n\|
            \end{align*}
            $$

            We may assume that $\|v_n\| = 1$, so $\|\div v_n\| \to 0$. By [L.2.1.2](#l212), we have
            that $v_n \in H_0(\curl 0; \Omega)$. We claim without proof that this space is compact.
            Thus, there exsits a subsequence $v_{m}$ converging to $v \in H_0(\curl 0; \Omega)$. Then,
            we have

            $$
            \begin{align*}
                (1) &\quad \div v = 0 \\
                (2) &\quad v \in H(\div 0; \Omega)^\perp \\
                (3) &\quad \|v\| = 1
            \end{align*}
            $$

            $(1)$ and $(2)$ contradicts $(3)$, so the theorem holds.

        === "$\ell=2$"
            Similar to the case $\ell=1$.

??? lemma "Lemma 2.1.2"
    ## Orthogonality of the kernel spaces <a id="l212"></a>

    We have the inclusions

    $$
    \left\{\begin{align*}
        H_0(\curl 0; \Omega)^\perp &\subset H(\div 0; \Omega) \\
        H(\div 0; \Omega)^\perp &\subset H_0(\curl 0; \Omega)
    \end{align*}\right.
    $$

    and

    $$
    \left\{\begin{align*}
        H_0(\div 0; \Omega)^\perp &\subset H(\curl 0; \Omega) \\
        H(\curl 0; \Omega)^\perp &\subset H_0(\div 0; \Omega)
    \end{align*}\right.
    $$

    These spaces are closed in $L^2$.

    ??? proof
        === "Closed"
            === "$H(\curl 0; \Omega)$"
                We have that $d_2^* = \curl : H(\curl; \Omega) \to L^2(\Omega)^3$ is
                continuous, so $H(\curl 0; \Omega) = \ker \d_2^*$ is closed.
            
            === "$H_0(\curl 0; \Omega)$"
                We have that

                $$H_0(\curl 0; \Omega) = H_0(\curl; \Omega) \cap H(\curl 0; \Omega)$$

                As both $H_0(\curl; \Omega)$ and $H(\curl 0; \Omega)$ are closed in
                $H(\curl; \Omega)$, we get that $H_0(\curl 0; \Omega)$ also is closed in
                $H(\curl; \Omega)$.

            === "$H(\div 0; \Omega)$ and $H(\div 0; \Omega)$"
                Follows similar arguments as for $$H(\curl 0; \Omega)$ and
                $H_0(\curl 0; \Omega)$.

        === "Inclusion"
            === "$H_0(\curl 0; \Omega)^\perp \subset H(\div 0; \Omega)$"
                $\begin{align*}
                    \text{Let } & v \in H_0(\curl 0; \Omega)^\perp \\
                    & \phi \in \D:=C_c^\infty
                \end{align*}$
                
                $\begin{align*}
                    &\implies \grad\phi \in H_0(\curl 0; \Omega) \\
                    &\implies\inner{\div v}{\phi}_{\D'\times\D} = -\inner{v}{\grad\phi} = 0 \\
                    &\implies\div v = 0 \\
                    &\implies v \in H(\div 0; \Omega)
                \end{align*}$

            === "$H(\div 0; \Omega)^\perp \subset H_0(\curl 0; \Omega)$"
                Follows from $H_0(\curl 0; \Omega)^\perp \subset H(\div 0; \Omega)$ and
                that they are closed.

            === "$H_0(\div 0; \Omega)^\perp \subset H(\curl 0; \Omega)$"
                $\begin{align*}
                    \text{Let } & v \in H_0(\div 0; \Omega)^\perp \\
                    & \phi \in \D^3
                \end{align*}$

                $\begin{align*}
                    &\implies \curl \phi \in H_0(\div 0; \Omega) \\
                    &\implies\inner{\curl v}{\phi} = \inner{v}{\curl\phi} = 0 \\
                    &\implies \curl v = 0 \\
                    &\implies v \in H(\curl 0; \Omega)
                \end{align*}$

            === "$H(\curl 0; \Omega)^\perp \subset H_0(\div 0; \Omega)$"
                Follows from $H_0(\div 0; \Omega)^\perp \subset H(\curl 0; \Omega)$ and
                that they are closed.

??? remark "Remark 2.1.3"
    $$
    \begin{align*}
        H(\curl 0; \Omega) = \ker d_2^* \\
        H(\div 0; \Omega) = \ker d_1^* \\
        H_0(\curl 0; \Omega) = \ker d_1 \\
        H_0(\div 0; \Omega) = \ker d_2
    \end{align*}
    $$


???+ proposition "Proposition 2.1.4"
    ## Closed range of differential operators

    The spaces

    $$\grad H_0^1(\Omega), \quad \curl H_0(\curl; \Omega), \quad \div H_0(\div; \Omega)$$

    and their counterparts without boundary conditions are closed in $L^2(\Omega)^3$.

    ???+ proof
        === "$\grad H_0^1(\Omega)$"
            Let $v_n \in \grad H_0^1(\Omega)$ be a sequence converging to $v \in L^2(\Omega)^3$.

            $\begin{align*}
                \implies& \exists\ \phi_n \in H_0^1(\Omega) \text{ s.t.} v_n = \grad\phi_n \\
                \implieshref{#t211}{T.2.1.1}& \exists\ c_p : \|\phi_n - \phi_m\| \le c_p \|\grad(\phi_n - \phi_m)\| = c_p \|v_n - v_m\| \\
                \implies& (\phi_n) \text{ is a Cauchy sequence in } H_0^1(\Omega) \\
                \implies& \exists\ \phi \in H_0^1(\Omega) \text{ s.t.} \phi_n \to \phi \\
                \overset{\text{cont}}{\implies}& v_n \to \grad\phi = v \in \grad H_0^1(\Omega)
            \end{align*}$

        === "$\curl H_0(\curl; \Omega)$"
            Let $v_n \in \curl H_0(\curl; \Omega)$ be a sequence converging to $v \in L^2(\Omega)^3$.

            $$\implies \exists\ \phi_n \in H_0(\curl; \Omega) : v_n = \curl\phi_n$$

            Let $\tilde \phi_n := (\I - P_{\ker \curl})\phi_n \in (\ker \curl)^\perp = H_0(\curl 0; \Omega)$.
            Then, $v_n = \curl\tilde\phi_n$.

            $$
            \begin{align*}
                \implieshref{#t211}{T.2.1.1}
                \exists\ c_p : \|\tilde\phi_n - \tilde\phi_m\| &\le c_p \|\curl(\tilde\phi_n - \tilde\phi_m)\| \\
                &= c_p \|v_n - v_m\|
            \end{align*}
            $$

            Then, we have

            $$
            \begin{align*}
                \|\tilde\phi_n - \tilde\phi_m\|_{H(\curl)}^2 &= \|\tilde\phi_n - \tilde\phi_m\|^2 + \|v_n - v_m\|^2 \\
                &\le (c_p^2 + 1) \|v_n - v_m\|^2
            \end{align*}
            $$

            and the rest follows as with $\grad H_0^1(\Omega)$.

        === "The rest"
            Similar to the case $\curl H_0(\curl; \Omega)$.
            

            