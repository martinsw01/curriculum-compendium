# 2.2 Mean value properties of Harmonic functions

??? theorem "Theorem 2.3"
    ## Mean value property <a id="t23"></a>

    $\begin{align*}
        \text{Let } & \Omega \subseteq \R^b \text{ be an open set with regular boundary} \\
        & u \in C^2(\Omega) \text{ be harmonic}
    \end{align*}$

    Then, for all $B(x,r) \subset \Omega$ we have

    $$u(x) = \fint_{\partial B(x, r)} u\, d\s = \fint_{B(x, r)} u\, dy$$

    ??? proof
        Let $\Phi(r):= \fint_{\partial B(x, r)} u(y)\, d\s(y) = \fint_{B(0, 1)} u(x+rz)\, d\s(z)$.

        ??? proof "Claim: $\Phi$ is constant"
            $$
            \begin{align*}
                \implies \Phi'(r) &= \fint_{\partial B(x, r)} \nabla u(x + rz) \cdot z\, d\s(z) \\
                &= \frac{1}{n \alpha(n) r^{n-1}} \int_{\partial B(x, r)} \nabla u(y) \cdot \frac{y-x}{r}\, d\s(y) \\
                &= \frac{1}{n \alpha(n) r^{n-1}} \int_{\partial B(x, r)} \par{u}{\nu}(y) \cdot \nu(y)\, d\s(y) \\
                &= \frac{1}{|B(x, r)|} \frac{r}{n} \int_{B(x, r)} \Delta u(y)\, dy \\
                &= 0
            \end{align*}
            $$

        === "Surface integral"
            $$
            \begin{align*}
                \implies \Phi(r) &= \lim_{r \to 0} \Phi(r) \\
                &= \lim_{r \to 0} \fint_{\partial B(x, r)} u(y)\, d\s(y) \\
                &= u(x)
            \end{align*}
            $$

        === "Volume integral"
            $$
            \begin{align*}
                \implies_{B(x,r)} u(y)\, dy
                &= \int_0^r \left(\int_{\partial B(x, \rho)} u(y)\, d\s(y)\right) d\rho \\
                &= \int_0^r u(x) |\partial B(x, \rho)|\, d\rho \\
                &= u(x) |B(x, r)|
            \end{align*}
            $$


??? theorem "Theorem 2.4"
    ## Converse of MVP <a id="t24"></a>
    Let $u \in C^2(\Omega)$ such that for all balls $B(x, r) \subset \Omega$

    $$u(x) = \fint_{\partial B(x, r)} u\, d\sigma$$

    Then, $u$ is harmonic in $\Omega$.

    ??? proof
        Assume $u$ is not harmonic. Then, there exists a ball $B(x, r) \subset \Omega$ such that

        $$\Delta u(y) > 0 \quad \forall\ y \in B(x, r)$$

        Let $\Phi(r) := \fint_{\partial B(x, r)} u(y)\, d\s(y)$.

        $$\implies \Phi'(r) = \frac{r}{n} \fint_{B(x, r)} \Delta u(y)\, dy > 0$$

        This is a contradiction to $u$ being harmonic.


??? theorem "Theorem 2.5"
    ## Maximum principle <a id="t25"></a>

    Let $u\in C^2(\Omega) \cap C(\overline{\Omega})$ be harmonic in $\Omega$.

    **(1) Weak:**

    $$\max_{\overline{\Omega}} u = \max_{\partial \Omega} u$$

    ---

    **(2) Strong:**

    If $\Omega$ is connected and $\exists\ x_0 \in \Omega$ such that
    
    $$u(x_0) = \max_{\overline{\Omega}} u$$

    then $u$ is constant in $\Omega$.

    ??? proof
        === "(2)"
            $\begin{align*}
                \text{Take } & 0 < r < \dist(x_0, \partial \Omega) \\
                & M:= \max_{\overline\Omega} u = u(x_0)
            \end{align*}$

            ??? proof "Claim: $A:=\{x \in \Omega \mid u(x) = M\}$ is open"
                $\begin{align*}
                    &M = u(x_0) = \fint_{B(x_0, r)} u(y)\, dy \le M \\
                    &\implies u(y) = M \quad \forall\ y \in B(x_0, r) \\
                    &\implies A \text{ is open} \\
                \end{align*}$

            We need to show that $A=\Omega$:

            $\begin{align*}
                & u \text{ is continuous} \\
                & \implies B = A^c \text{ is open} \\
                &A \cup B = \Omega \land A \cap B = \emptyset \land \Omega \text{ is connected} \\
                &\implies A = \Omega
            \end{align*}$

        === "(1)"
            Assume **(2)** holds

            $\begin{align*}
                & u \text{ is constant} \\
                &\implies \max_{\overline{\Omega}} u = \max_{\partial \Omega} u
            \end{align*}$

            Assume **(2)** is false, and let $U \subset \Omega$ be a connected component.

            $\begin{align*}
                & \implies \max_{\overline{U}} u = \max_{\partial U} u \\
                &\implies \max_{\overline{\Omega}} u = \max_{\partial \Omega} u
            \end{align*}$


???+ theorem "Theorem 2.6"
    ## Uniqueness of the Dirichlet problem <a id="t26"></a>

    $\begin{align*}
        \text{Let } & g \in C(\partial \Omega) \\
        & f \in C(\Omega)
    \end{align*}$

    Then, there exists at most one $u \in C^2(\Omega) \cap C(\overline{\Omega})$ such that

    $$\left\{\begin{align}
        -\Delta u &= f &&\text{ in } \Omega \\
        u &= g &&\text{ on } \partial \Omega
    \end{align}\right.\quad (P)$$


    ???+ proof
        Suppose there exists $u\neq v \in C^2(\Omega) \cap C(\overline{\Omega})$ solving $(P)$.

        $\begin{align*}
            &\implieshref{#t25}{MP} \max_{\overline{\Omega}} u - v
            = \min_{\overline{\Omega}} u - v = \max_{\partial \Omega} u - v = 0 \\
            &\implies u = v
        \end{align*}$