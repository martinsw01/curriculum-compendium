# 3.1 Closed Hilbert complexes

Consider a sequence of the form

$$W^{\ell-1} \xrightarrow{d^{\ell-1}} W^{\ell} \xrightarrow{d^{\ell}} W^{\ell+1} \label{prim-seq}\tag{1}$$

consisting of Hilbert spaces $W^{\ell}$ an unbounded closed operators
$d^{\ell} : W^{\ell} \to W^{\ell+1}$ with dense domains $V^{\ell} \subset W^{\ell}$ equipped
with the inner product

$$\inner{v}{w}_V := \inner{v}{w} +\inner{dv}{dw}$$

The sequence index $\ell$ will be ommited when clear from the context.

???+ definition "Definition 3.1.1"
    ### Hilbert complex

    The sequence $(\ref{prim-seq})$ is called a **Hilbert complex** if it satisfies the "sequence
    property"

    $$d^\ell d^{\ell-1} = 0.$$

    Then, the sequence

    $$V^{\ell-1} \xrightarrow{d^{\ell-1}} V^{\ell} \xrightarrow{d^{\ell}} V^{\ell+1}
    \label{domain-seq}\tag{2}$$

    is also a Hilbert complex, called the **domain complex**.

    ---

    The domain complex $(\ref{domain-seq})$ is **closed** if $d^\ell V^\ell$ is closed in $W^{\ell+1}$.

    ---

    Further, $\ref{domain-seq}$ is called **exact** if

    $$d^{\ell-1}V^{\ell-1} = \ker d^\ell.$$

### 3.1.1 The dual (adjoint) complex

By identifying each $L^2$-space $W^{\ell+1}$ with its dual, we can see $d^\ell$ as an
operator mapping $V^\ell$ to $(W^{\ell+1})'$. Its **transpose** operator

$$\delta^{\ell+1} = (d^\ell)^t : W^{\ell+1} \to (V^{\ell+1})'$$

is identified by

$$\inner{\delta^{\ell+1}w}{v}_{(V^\ell)'\times V^\ell} = \inner{w}{d^\ell v}
\quad \forall\, w \in W^{\ell+1}, v \in V^\ell.$$

The **adjoint** of $d^\ell$ is an unbounded operator $d_{\ell+1}^* : W^{\ell+1} \to W^\ell$
which corresponds to $\delta^{\ell+1}$ on its domain $V_{\ell+1}^* \subset W^\ell$, i.e.
those $w \in W^\ell : \delta^{\ell+1}w \in W^\ell$. Specifically it is defined as

$$V_{\ell+1}^* = \left\{w \in W^{\ell+1}\ \Big|\ \exists\, C_w \ge 0 :
|\inner{w}{d^\ell v}| < C_w\|v\| \quad \forall\, v \in V^\ell\right\}$$

and the adjoint operator $d_{\ell+1}^*$ is defined by the relation

$$\inner{d_{\ell+1}^*w}{v} = \inner{w}{d^\ell v}
\quad \forall\, w \in V_{\ell+1}^*, v \in V^\ell.$$

Clearly, $d_{\ell+1}^* = \delta^{\ell+1}$ on $V_{\ell+1}^*$. Further, when $d^\ell$ is
bounded ($V^\ell = W^\ell$), so is $\delta^{\ell+1}$. hence, the transpose corresponds to
a weak differential operator defined on all of $L^2$, whereas the adjoint corresponds to
a strong one on a smaller space. The **dual complex** is then

$$V_{\ell-1}^* \xleftarrow{d_\ell^*} V_\ell^* \xleftarrow{d_{\ell+1}^*} V_{\ell+1}^*.$$

If $(\ref{domain-seq})$ is a closed Hilbert complex, then the dual complex above is also closed. In
particular, we can show that

$$d_{\ell+1}^*d_\ell^* = 0. \label{dual-seq-prop}\tag{3}$$


## 3.1.2 Hodge-Helmholtz decompositions

<span style="display: hidden">
    $\newcommand{\B}{\mathfrak{B}}$
    $\newcommand{\H}{\mathfrak{H}}$
    $\newcommand{\Z}{\mathfrak{Z}}$
    $\newcommand{\L}{\mathcal{L}}$
</span> Denote the range and kernels of the primal operators by

$$\B^\ell = \Im(d^{l-1}) = d^{l-1}V^{l-1} \subset V^\ell,
\quad \Z^\ell = \ker(d^\ell) \subset V^\ell$$

and similarly for the dual operators:

$$\B_\ell^* = \Im(d_{\ell+1}^*) = d_{\ell+1}^*V_{\ell+1}^* \subset V_\ell^*,
\quad \Z_\ell^* = \ker(d_\ell^*) \subset V_\ell^*.$$

As the primal operators are closed and densely defined, we have

$$\Z_\ell^* = (\B_\ell^*)^{\perp_W}, \quad \Z^\ell = (\B_\ell^*)^{\perp_W}.$$

Additionally, the complex is assumed closed, so their ranges are also closed. Hence, we have

$$(\Z_\ell^*)^{\perp_W} = \B^\ell, \quad (\Z^\ell)^{\perp_W} = \B_\ell^*. \label{orth-id}\tag{4}$$

These relations verify that $(\ref{dual-seq-prop})$ holds, so the dual complex is a (closed)
Hilbert complex. Further, it is exact when the primal is.

??? proof
    From the sequence property, we get that $\B^\ell \subset \Z_\ell$.

    $\begin{align*}
        & \implies (\Z^\ell)^{\perp_W} \subset (\B^\ell)^{\perp_W} \\
        & \implies \B_\ell^* \subset \Z_\ell^* \\
        & \implies (\ref{dual-seq-prop}) \text{ holds.}
    \end{align*}$

    When the primal complex is exact, we have equalities, so the dual is exact as well.

In the general case, we define the space of harmonic functions as the complement

$$\H^\ell := \Z^\ell \cap (\B^\ell)^{\perp_W}$$

This yields an orthogonal decomposition

$$V^\ell = \Z^\ell \opp (\Z^\ell)^{\perp_W} = \B^\ell \opp \H^\ell \opp (\Z^\ell)^{\perp_W}
\overset{(\ref{orth-id})}{=} \B^\ell \opp \H^\ell \opp \B_\ell^*.
\label{orth-decomp}\tag{5}$$

When the sequence is exact, we have that $\H^\ell = \{0\}$.

## 3.1.3 The Hodge-Laplace operator

The **Hodge-Laplace operator** $\L^\ell : W^\ell \to W^\ell$ is defined as

$$\L^\ell = d^{\ell-1}d_\ell^* + d_{\ell+1}^*d^\ell.$$

It is an unbounded operator with domain

$$D(\L) = \{u \in V^\ell \cap V_\ell^* \mid d^\ell u \in V_{\ell+1}^*, d_\ell^*u \in V_{\ell-1}^*\}.$$

It is also self-adjoint and positive semi-definite, as it is the sum of two such operators.
Specifically, we verify that

$$
\left\{\begin{align*}
    & \ker(d^{\ell-1}d_\ell^*) = \ker(d_\ell^*) = \Z_\ell^* \\
    & \Im(d^{\ell-1}d_\ell^*) = (\Z_\ell^*)^{\perp_W} = \B^\ell \\
    & \ker(d_{\ell+1}^*d^\ell) = \ker(d^\ell) = \Z^\ell \\
    & \Im(d_{\ell+1}^*d^\ell) = (\Z^\ell)^{\perp_W} = \B_\ell^*.
\end{align*}\right.
$$

In particular, using $(\ref{orth-decomp})$, we find

$$
\left\{\begin{align*}
    & \ker \L^\ell = \Z_\ell^* \cap \Z^\ell = (\B^\ell \opp \B_\ell^*)^{\perp_W} = \H^\ell \\
    & \Im \L^\ell = \B^\ell \opp \B_\ell^* = (\H^\ell)^{\perp_W}
\end{align*}\right.
$$

so the harmonic functions correspond to the kernel of the Hodge-Laplace operator $\L^\ell$
(similarly to the usual sense of harmonic functions, fro which the usual Laplacian vanishes).

## 3.1.4 The Hodge-Laplace source problem

The **Hodge-Laplace source problem** reads

$$
\begin{align*}
    &\text{Find } u \in D(\L^\ell) \text{ s.t.} \\
    &\quad L^\ell u = f
\end{align*} \label{hodge-laplace1}\tag{H-L'}
$$

where $f\in W^\ell$ is a given source. In this form, this may not be well-posed.

???+ proposition "Proposition 3.1.3"
    If $\H^\ell \neq \{0\}$, then $(\ref{hodge-laplace1})$ is ill-posed.

    ???+ proof
        This follows trivially, from the fact that $\ker \L^\ell = \H^\ell$, so
        $(\ref{hodge-laplace1})$ may have many solutions.

        Additionally, a solution can only exist if
        $f \in \Im \L^\ell = (\H^\ell)^{\perp_W}$.
    

In order to have a well-posed problem, we need to modify the source term an add the
constraint $u\in (\H^\ell)^{\perp_W}$:

$$
\begin{align*}
    &\text{Find } u \in D(\L^\ell) \cap (\H^\ell)^{\perp_W} \text{ s.t.} \\
    &\quad L^\ell u = f - P_\H f
\end{align*} \label{hodge-laplace2}\tag{H-L''}
$$

where $P_\H$ is the $W$ (i.e. $L^2$) projection onto $\H^\ell$. Hence, $(\I - P_\H)$ is
the projection onto $(\H^\ell)^{\perp_W}$.

To define a FEM approximation of for this problem, it will be convenient to reformulate it
in a mixed form. For this, we introduce $\s = d_\ell^* u$ and the Lagrange multiplier
$p \in \H^\ell$ associated with the constraint $u \in (\H^\ell)^{\perp_W}$.

$$
\begin{align*}
    &\text{Find } (\s, u, p) \in V^{l-1} \times V^\ell \times \H^\ell \text{ s.t.} \\
    &\quad \left\{\begin{aligned}
        \inner{\s}{\tau} - \inner{d\tau}{u} &= 0
        && \forall\, \tau \in V^{l-1}, \\
        \inner{d\sigma}{v} + \inner{du}{dv} + \inner{p}{v} &= \inner{f}{v}
        && \forall\, v \in V^\ell, \\
        \inner{u}{q} &= 0
        && \forall\, q \in \H^\ell.
    \end{aligned}\right.
\end{align*}\label{hodge-laplace-mixed}\tag{H-L}
$$

## 3.1.5 Link with the magneto-static problem

To reformulate the magneto-static problem

$$
\left\{\begin{align*}
    \curl \bm B &= \bm J, \\
    \div \bm B &= 0
\end{align*}\right.\label{magneto-static}\tag{M-S}
$$

we use the homogeneous de Rham sequence and consider $\bm B \in V^2 = H_0(\div; \Omega)$.
$\bm B$ being divergence-free, we have
$\bm B \in H_0(\div 0; \Omega) = \Z^2 = (\B_2^*)^{\perp_W}$, and using
$(\ref{orth-decomp})$, we can decompose

$$\bm B = \curl \bm A + \bm B_\H \in \B^2 \opp \H^2$$

where $\bm A \in V^1$ corresponds to a vector potential and $\bm B_\H \in \H^2$. A uniuque
potential can be obtained by requiring
$\bm A \in (\ker\curl)^\perp = (H_0(\curl 0; \Omega))^\perp \iff \div \bm A = 0$. The
magneto-static problem $(\ref{magneto-static})$ then becomes

$$
\begin{align*}
    &\text{Find } \bm A \in V^1 \text{ s.t.} \\
    &\quad \left\{\begin{aligned}
        \div \bm A &= 0, \\
        \curl\curl \bm A &= \bm J.
    \end{aligned}\right.
\end{align*}
$$

However, by [P.3.1.3](#prop313), we know that this is an ill-posed problem.