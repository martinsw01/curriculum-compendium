# 1.3 The de Rham sequence and the Hodge-Laplace equation

## 1.3.1 The de Rham sequence

???+ definition "Definition 1.1"
    ### de Rham sequence

    A **de Rham sequence** is a sequence $\{V^\ell\}$ of Hilbert spaces and operators
    $\{d^\ell\}$ between them

    $$V^0 \xrightarrow{d^0} V^1 \xrightarrow{d^1} V^2 \xrightarrow{d^2} \dots \xrightarrow{d^{n-1}} V^n$$

    satisfying the "sequence property":

    $$
    \begin{cases}
        d^{\ell+1} \circ d^\ell = 0 \\
        \Ran d^\ell \subset \ker d^{\ell+1}
    \end{cases}
    $$

    It is called **exact** if $\Ran d^\ell = \ker d^{\ell+1}$.

We will study de Rham sequences made of differential operators.

???+ example
    - $V^0 = H^1(\Omega) \xrightarrow{d^0 = \grad} V^1 = H(\curl; \Omega) \xrightarrow{d^1 = \curl} V^2 = H(\div; \Omega) \xrightarrow{d^2 = \div} V^3 = L^2(\Omega)$
    - $V^0 = H^1_0(\Omega) \xrightarrow{d^0 = \grad} V^1 = H_0(\curl; \Omega) \xrightarrow{d^1 = \curl} V^2 = H_0(\div; \Omega) \xrightarrow{d^2 = \div} V^3 = L^2(\Omega)$

## 1.3.2 Dual spaces

From the operators in the sequence

$$V^0 \xrightarrow{d^0=\grad} V^1 \xrightarrow{d^1=\curl} V^2 \xrightarrow{d^2=\div} V^3$$

we can define the adjoint operators $d^*_{\ell+1}:=(d^\ell)^*$ and denote their domains by
$V^*_{\ell+1}$. This forms new de Rham sequence called the **dual sequence**:

$$V_0^* \xleftarrow{d_1^*=-\div} V_1^* \xleftarrow{d_2^*=\curl} V_2^* \xleftarrow{d_3^*=-\grad} V_3^*$$

For primal maximal domains, the duals need homogeneous boundary conditions:

$$V_0^* = L^2(\Omega),\quad V_1^* = H_0(\div; \Omega), \quad V_2^* = H_0(\curl; \Omega), \quad V_3^* = H^1_0(\Omega)$$


## 1.3.3 The Hodge-Laplace equation

???+ definition "Definition 1.2"
    ### Hodge-Laplace operator

    The **Hodge-Laplace operator** is given by

    $$L^\ell := d^*_{\ell+1}d^\ell + d^{\ell-1}d^*_{\ell}$$

    It is a self-adjoint operator with domain and kernel

    $$
    \begin{align*}
        D(L^\ell) &= \{u \in V^\ell \cap V^*_\ell \mid d^\ell v \in V^*_{\ell+1}, d^*_\ell v \in V_{\ell-1}\} \\
        \ker L^\ell &= \{u \in V^\ell \cap V^*_\ell \mid d^\ell v = 0, \quad d^*_\ell v = 0\}
    \end{align*}
    $$

    The nontrivial elements $0 \neq v \in \ker L^\ell$ are called **harmonic fields**.

???+ example "Example in 3D"
    The primal sequence with homogeneous boundary conditions with is dual is given by

    $$
    \begin{matrix}
        V^0 = H^1_0(\Omega) & \xrightarrow{d^0 = \grad} & V^1 = H_0(\curl; \Omega) & \xrightarrow{d^1 = \curl}
        & V^2 = H_0(\div; \Omega) & \xrightarrow{d^2 = \div} & V^3 = L^2(\Omega) \\
        V_0^* = H^1(\Omega) & \xleftarrow{d_1^* = -\div} & V_1^* = H(\div; \Omega) & \xleftarrow{d_2^* = \curl}
        & V_2^* = H(\curl; \Omega) & \xleftarrow{d_3^* = -\grad} & V_3^* = H^1(\Omega)
    \end{matrix}
    $$

    === "$\ell=0$"

        $$
        \begin{align*}
            L^0 &= d^*_1d^0 + d^{-1}d^*_0 \\
            &= -\div\grad + 0 = -\Delta \\ \\
            D(L^0) &= \{v \in V^0 \cap V^*_0 \mid d^0 v \in V^*_1\} \\
            &= \{v \in H^1_0(\Omega) \mid \grad v \in H(\div; \Omega)\}
        \end{align*}
        $$

        So we get the Laplacian.

    === "$\ell=1$"
        $$
        \begin{align*}
            L^1 &= d^*_2d^1 + d^0d^*_1 \\
            &= \curl\ \curl - \grad\ \div \\ \\
            D(L^1) &= \{v \in V^1 \cap V^*_1 \mid d^1 v \in V^*_2, \quad d^*_1 v \in V^0\} \\
            &= \{v \in H_0(\curl; \Omega) \mid \curl v \in H(\div; \Omega), \quad \div v \in H_0^1(\Omega)\}
        \end{align*}
        $$

        This is the vector Laplacian.

    === "$\ell=2$"
        $$
        \begin{align*}
            L^2 &= d^*_3d^2 + d^1d^*_2 \\
            &= \grad\div + \curl\curl \\ \\
            D(L^2) &= \{v \in V^2 \cap V^*_2 \mid d^2 v \in V^*_3, \quad d^*_2 v \in V^1\} \\
            &= \{v \in H_0(\div; \Omega) \mid \div v \in H^1(\Omega), \quad \curl v \in H_0(\curl; \Omega)\}
        \end{align*}
        $$

        This is again the vector Laplacian, but with a differnt domain.

    === "$\ell=3$"
        $$
        \begin{align*}
            L^3 &= d^*_4d^3 + d^2d^*_3 = -d^2d^*_3 \\
            &= -\div\grad = -\Delta \\ \\
            D(L^3) &= \{v \in V^3 \cap V^*_3 \mid d^*_3 v \in V^2\} \\
            &= \{v \in H^1(\Omega) \mid \grad v \in H_0(\div; \Omega)\}
        \end{align*}
        $$

        This is again the Laplacian but with a different domain than in $\ell=0$.


## 1.3.4 Reformulation of the static Maxwell equations

Assume that $\rho \in H_0^1(\Omega)$ and $\bm J \in H_0(\curl; \Omega)$. Additionally, we
require $\div \bm J = 0$, but this must hold anyways, as $\curl \bm B = \bm J$.

For the electric system, we have

$$
\begin{cases}
    \div \bm E = \rho \\
    \curl \bm E = 0
\end{cases}
$$

so we see that $\bm E \in D(L^1)$. Additionally, we have

$$
\begin{align*}
    L^1\bm E &=\curl\curl\bm E - \grad\div\bm E \\
    &= -\grad\rho
\end{align*}
$$

For the magnetic system, we have the equations

$$
\begin{cases}
    \curl \bm B = \bm J \\
    \div \bm B = 0
\end{cases}
$$

so $\bm B \in D(L^2)$ and

$$
\begin{align*}
    L^2\bm B &= \grad\div\bm B + \curl\curl\bm B \\
    &= \curl\bm J
\end{align*}
$$

???+ proof "Claim: The reformulated systems are equivalent to the original ones"
    Assume $L^\ell$ has no harmonic fields: $\ker L^1 = \ker L^2 = \{0\}$.

    === "Electric system"
        We take the divergence, yielding the poission equation

        $$\div L^1\bm E = -\Delta \div \bm E = -\Delta \rho$$

        which is well posed for $\div \bm E \in H_0^1(\Omega)$ with unique solution $\div \bm E = \rho$.
        Then, we get $\curl \curl \bm E = 0$. It remains to show that $\curl \bm E = 0$. As we have that
        $\bm E \in D(L^1) \subset H_0(\curl; \Omega)$, we get 

        $$0 = \inner{\curl \curl \bm E}{\bm E}_{L^2} = \inner{\curl \bm E}{\curl \bm E}_{L^2} = \|\curl \bm E\|_{L^2}^2$$

        so $\curl \bm E = 0$. Thus, the two systems are equivalent.

    === "Magnetic system"
        === "$\div \bm B = 0$"
            We take the divergence of the magnetic system, yielding

            $$\div L^2\bm B = \div \grad\div\bm B = 0$$
    
            We see that $\div \bm B$ is constant. Moreover, we have
    
            $$
            \begin{align*}
                \int_\Omega \div \bm B \,dx &= \int_{\partial\Omega} \bm n \cdot \bm B \,d\s = 0
            \end{align*}
            $$
    
            so $\div \bm B = 0$.

        === "$\curl \bm B = \bm J$"
            Let $\bm F := \curl \bm B - \bm J$. Taking the curl, we get

            $$
            \begin{align*}
                \curl \bm F &= \curl\curl\bm B - \curl\bm J \\
                &= \grad\div\bm B \\
                &= 0
            \end{align*}
            $$

            As we assume $\bm J \in H(\div 0; \Omega)$, when taking the divergence, we get

            $$\div \bm F = -\div \bm J = 0$$

            Thus, $\bm F \in H_0(\curl; \Omega) \subset D(L^1)$ and $L^1\bm F = 0$. As we assume
            $L^1$ has no harmonic fields, we get $\curl \bm B = \bm J$. 
        