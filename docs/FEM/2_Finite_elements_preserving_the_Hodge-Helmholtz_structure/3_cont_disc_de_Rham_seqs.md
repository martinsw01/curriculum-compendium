# 2.3 Continuous and discrete de Rham sequences in 2D

## 2.3.1 Continuous de Rham sequences

In 2D, we have the two de Rham sequences

$$
\begin{matrix}
    V^0 & \xrightarrow{d^0 = \bm\grad} & V^1 & \xrightarrow{d^1 = \curl} & V^2 \\
    V^0 & \xrightarrow{d^0 = \bm\curl} & V^1 & \xrightarrow{d^1 = \div} & V^2
\end{matrix}
$$

with the operators

$$
\begin{align*}
    \bm\curl \phi &= (\partial_2 \phi, -\partial_1 \phi) \\
    \curl \bm v &= \partial_1 v_2 - \partial_2 v_1 \\
\end{align*}
$$

???+ remark
    - $\curl \bm v$ is the third component of $\curl (v_1, v_2, 0)$.
    - $\bm\curl \phi$ is the first two components of $\curl (0, 0, \phi)$.

???+ remark
    Let $R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ be a rotation matrix. Then, we
    have the following equalities:

    $$
    \begin{align*}
        \bm\curl &= R\,\bm\grad \\
        \div &= \curl R^{-1} = \curl R^T
    \end{align*}
    $$


Consider the first sequence with homogeneous boundary conditions. This yields the primary
sequence

$$V^0:=H^1_0(\Omega) \xrightarrow{\bm\grad} V^1:=H_0(\curl; \Omega) \xrightarrow{\curl} V^2:=L^2(\Omega)$$

and the dual sequence

$$V_0^*:=L^2(\Omega) \xleftarrow{\div} V_1^*:=H(\div; \Omega) \xleftarrow{\bm\curl} V_2^*:=H(\bm\curl; \Omega)$$

???+ remark
    - The dual of $\bm\grad$ is $\bm\grad^* =-\div$
    - The dual of $\curl$ is $\curl^* = \bm\curl$.

    To show this, we use the matrix $A= \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$
    lift the problem into 3D. Then, we can use the usual cross products and curl.
    === "$\bm\grad^* = -\div$"
        $\begin{align*}
            \text{Let } & \phi \in V^0 = H^1_0(\Omega) \\
            & \bm v \in V_1^* = H(\div; \Omega) \\
            & \bm\phi := (0, 0, \phi) 
        \end{align*}$

        

        $$
        \begin{align*}
            \implies \inner{\bm\grad \phi}{\bm v} &= \inner{R^T \bm\curl \phi}{\bm v} \\
            &= \inner{R^T A (\nabla \times \bm\phi)}{\bm v} \\
            &= \inner{\nabla \times \bm\phi}{A^T R\bm v} \\
            &= \inner{\bm\phi \times \bm n}{A^T R \bm v}_{\partial \Omega}
            + \inner{\bm\phi}{\nabla\times A^T R\bm v} \\
            &= \inner{\phi}{-\div \bm v}
        \end{align*}
        $$


    === "$\curl^* = \bm\curl$"
        $\begin{align*}
            \text{Let } & \bm v \in V^1 = H_0(\curl; \Omega) \\
            & w \in V_2^* = H(\bm\curl; \Omega) \\
            & \bm w := (0, 0, w)
        \end{align*}$

        $$
        \begin{align*}
            \implies \inner{\curl \bm v}{w} &= \int_\Omega \nabla \times(A^T \bm v) \cdot \bm w \,dx \\
            &= \int_\Omega \nabla \cdot (A^T \bm v \times \bm w) \,dx
            + \int_\Omega A \bm v \cdot \nabla \times \bm w \,dx \\
            &= \int_{\partial \Omega} (A^T \bm v \times \bm n) \cdot \bm w \,d\s
            + \inner{A^T \bm v}{\bm\nabla \times \bm w} \\
            &= \inner{\bm v}{A (\nabla \times \bm w)} \\
            &= \inner{\bm v}{\bm\curl w}
        \end{align*}
        $$

???+ proof "Claim: These are indeed de Rham sequences"
    === "Primary sequence"
        $\begin{align*}
            \text{Let } & \phi \in H_0^1(\Omega) \\
            & \psi \in \D^2
        \end{align*}$

        $\begin{align*}
            &\implies\inner{\curl \bm\grad \phi}{\psi}
            =\inner{\bm\grad \phi}{\bm\curl \psi}
            =-\inner{\phi}{\div \bm\curl \psi} = 0 \\
            &\implies \curl \bm\grad \phi = 0 \\
            &\implies \Im \bm\grad \subseteq \ker \curl
        \end{align*}$

        So the primary sequence satisfies the "sequence property".

    === "Dual sequence"
        $\begin{align*}
            \text{Let } & w \in H(\bm\curl; \Omega) \\
            & \psi \in \D^2
        \end{align*}$

        $\begin{align*}
            &\implies\inner{\div \bm\curl w}{\psi}
            =-\inner{\bm\curl w}{\bm\grad \psi}
            =-\inner{w}{\curl \bm\grad \psi} = 0 \\
            &\implies \div \bm\curl w = 0 \\
            &\implies \Im \bm\curl \subseteq \ker \div
        \end{align*}$

        So the dual sequence satisfies the "sequence property".


???+ proposition "Proposition 2.3.1"
    ### Hodge-Helmholtz decomposition <a id="p231"></a>

    We can decompose

    $$L^2(\Omega)^2 = \bm\grad H^1_0(\Omega) \opp \H_{\bm\tau}(\Omega) \opp \bm\curl H(\bm\curl; \Omega)$$

    with the harmonic fields

    $$\H_{\bm\tau}(\Omega) := \{\bm v \in H_0(\curl; \Omega) \mid \curl \bm v = \div \bm v = 0\}$$


## 2.3.2 Discrete de Rham sequences

We will define Finite Element spaces that satisfying the key embeddings:

$$V_h^0 \subset V^0=H^1_0(\Omega), \quad V_h^1 \subset V^1=H_0(\curl; \Omega), \quad V_h^2 \subset V^2=L^2(\Omega)$$

and form a discrete de Rham sequence

$$V_h^0 \xrightarrow{\bm\grad_h} V_h^1 \xrightarrow{\curl_h} V_h^2$$

approximating the continuous one. Thus, we need

1. The embeddings $\bm\grad_h V_h^0 \subset V_h^1$ and $\curl_h V_h^1 \subset V_h^2$.
2. The "sequence property" $\curl_h \bm\grad_h = 0$.

The "sequence property" is satisfied if we restrict the usual operators to the discrete
spaces:

$$
\left\{\begin{align*}
    \bm\grad_h &= \bm\grad : V_h^0 \to V_h^1 \\
    \curl_h &= \curl : V_h^1 \to V_h^2
\end{align*}\right.
$$

Further, we can define their adjoints

$$
\left\{\begin{align*}
    \wtilde\div_h &:= (-\bm\grad_h)^* : V_h^1 \to V_h^0 \\
    \wtilde{\bm\curl}_h &:= (\curl_h)^* : V_h^2 \to V_h^1
\end{align*}\right.
$$

as the weak differential operators:

$$
\left\{\begin{align*}
    \wtilde\div_h \bm v_h &\in V_h^0 &\quad \forall \bm v_h \in V_h^1 \\
    \inner{\wtilde\div_h \bm v_h}{\phi_h} &= -\inner{\bm v_h}{\bm\grad_h \phi_h} &\quad \forall \phi_h \in V_h^0
\end{align*}\right.
$$

and

$$
\left\{\begin{align*}
    \wtilde{\bm\curl}_h w_h &\in V_h^1 &\quad \forall w_h \in V_h^2 \\
    \inner{\wtilde{\bm\curl}_h w_h}{\bm v_h} &= \inner{w_h}{\curl_h \bm v_h} &\quad \forall \bm v_h \in V_h^1.
\end{align*}\right.
$$

This yields the dual discrete de Rham sequence

$$V_h^0 \xleftarrow{\wtilde\div_h} V_h^1 \xleftarrow{\wtilde{\bm\curl}_h} V_h^2$$

???+ remark
    This sequence is similar to dual of the continuous sequence, but

    - The differential operators does not coincide with the strong ones
    - The dual spaces are the same as the primal spaces in the discrete sequence.

## 2.3.3 Discrete Hodge-Helmholtz decomposition

The discrete decomposition is analogous to that of [P.2.3.1](#p231). It is obtained by
observing that the orthogonal complement of $\bm\grad_h V_h^0$ in $V_h^1$ is
$(\bm\grad_h V_h^0)^\perp = \ker \wtilde\div_h$. Thus, we have

$$V_h^1 = \bm\grad_h V_h^0 \opp \ker \wtilde\div_h$$

The discrete analogue thus reads

$$V_h^1 = \bm\grad_h V_h^0 \opp \H_{\bm\tau,h} \opp \wtilde{\bm\curl}_h V_h^2$$

where $\H_{\bm\tau,h}$ is the space of harmonic $1$-forms approximating $\H_{\bm\tau}$.

$$\H_{\bm\tau,h} := \ker \curl_h \cap \ker \wtilde\div_h = \{\bm v_h \in V_h^1 \mid \curl_h \bm v_h = \wtilde\div_h \bm v_h = 0\}$$

Obesrve further that $\H_{\bm\tau,h}$ is the kernel of $L_h^1 : V_h^1 \to V_h^1$

$$L_h^1 := -\bm\grad_h \wtilde\div_h + \wtilde{\bm\curl}_h \curl_h.$$