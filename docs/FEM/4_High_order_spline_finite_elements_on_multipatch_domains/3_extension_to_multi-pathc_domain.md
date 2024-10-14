# 4.3 Extension to the multi-patch domain Ω

<span style="display: none">
    $\newcommand{\x}{\bm{\operatorname{x}}}$
    $\newcommand{\y}{\bm{\operatorname{y}}}$
    $\newcommand{\e}{\operatorname{e}}$
    $\newcommand{\f}{\operatorname{f}}$
</span>

In this section, it will be described how structure-preserving finite elements can be defined
on a multi-patch domain $\Omega$ composed of subdomains
$\Omega_k = F_k(\hat\Omega), k=1,\dots,K$, where $F_k$ are diffeomorphisms.

We assume that the patches are *geometrically conforming* in the sense that any interface
$\Gamma_{k,l} = \partial\Omega_k \cap \partial\Omega_l$

1. is a vertex, full edge or both, and
2. admits the same parametrization from both patches, up to orientation.

**The case of a vertex** is trivial, as 2. becomes empty.

**The case of a full edge**

That is,

$$\Gamma_{k,l} = F([\hat\x_0, \hat\x_0 + \bm e_d]) = F_l([\hat\y_0, \hat\y_0 + \bm e_b])$$

where $\hat\x_0, \hat\y_0 \in \hat\Omega$ are vertices of the reference domain. 2. then means
that

$$F_k(\hat\x_0 + s \bm e_d) = F_l(\hat\y_0 + \theta(s) \bm e_b), \quad s \in [0, 1]$$

where $\theta$ is aan affine bijection on $[0, 1]$.

**The case of a full patch face**

Then, 2. means that

$$F_k(\hat\x_0 + s \bm e_{d'} + t e_{d''}) = F_l(\hat\y_0 + \theta_1(s,t) \bm e_{b'} + \theta_2(s,t) \bm e_{b''}),
\quad s, t \in [0, 1]$$

 where $\theta_1$ and $\theta_2$ are affine bijections on $[0, 1]^2$.

Finally, assume that every patch is discretized with spline spaces of uniform degree $p$, and
the number of cells are $N$.


## 4.3.1 De Rham sequences on the mapped subdomains Ωₖ

On each subdomain (patch) $\Omega_k = F_k(\hat\Omega)$, define first a sequence of spaces
$V_h^\ell(\Omega_k)$ by *pushing forward* the reference spline spaces
$\hat V^\ell = V_h^\ell(\hat\Omega)$:

$$V_h^\ell(\Omega_k) = \F_k^\ell(\hat V^\ell)$$

The push-forward operators are defines as

$$
\begin{align*}
    \F_k^0 : \hat u &\mapsto u := \hat u \circ F_k^{-1} \\
    \F_k^1 : \hat{\bm u} &\mapsto \bm u := (DF_k^{-T} \hat{\bm u}) \circ F_k^{-1} \\
    \F_k^2 : \hat{\bm u} &\mapsto \bm u :=
    \left(\frac{D F_k}{J_k} \hat{\bm u}\right) \circ F_k^{-1} \\
    \F_k^3 : \hat u &\mapsto u := \left(\frac{1}{J_k} \hat u\right) \circ F_k^{-1}
\end{align*}
$$

where $DF_k(\hat\x) = (\partial_j (F_k)_i(\hat\x))_{i,j=1}^3$ is the Jacobian and $J_k$ is
the determinant of the Jacobian. The inverse operators $(\F_k^\ell)^{-1}$ are called
*pull-backs*, and their fundamentsl (characteristic) property is that they commute with the
differential operators from the de Rham sequence:

$$(\F_k^{\ell+1})^{-1} d^\ell = \hat d^\ell (\F_k^\ell)^{-1}$$

with $d^0=\grad, d^1=\curl, d^2=\div$ and $\hat d^\ell$ being their counterparts in the
reference cartesian domain $\hat\Omega$. Thus we find that $V_k^\ell(\Omega_k)$ from a local
de Rham sequence:

$$V_h^0(\Omega_k) \xrightarrow{\grad} V_h^1(\Omega_k) \xrightarrow{\curl} V_h^2(\Omega_k)
\xrightarrow{\div} V_h^3(\Omega_k).$$

Since the push-forwards are linear, each local space $V_h^\ell(\Omega_k)$ cam be equipped with
the basis functions defined as the push-forwards of the reference basis functions:

$$\Lambda_{k,\mu}^{\ell,B} := \F_k^\ell(\hat\Lambda_\mu^{\ell,B})$$

## 4.3.2 Geometric degrees of freedom and interpolation on the mapped patches

On each patch, we define local degrees of freedom

$$\s_{k,\mu}^\ell(v) := \hat\s_\mu^\ell\left((\F_k^\ell)^{-1} v|_{\Omega_k}\right),
\quad (k, \mu) \in \M_K^\ell$$

By construction, these are in duality with the local basis functions

$$\s_{k,\mu}^\ell(\Lambda_{l,\nu}^\ell) = \delta_{(k,\mu),(l,\nu)},
\quad \forall\,(k,\mu),(l,\nu) \in \M_K^\ell.$$

Additionally, a feature of the pull-back operators is to carry the geometric nature of the
reference degrees of freedom to the mapped elements. For $\ell=0$, they consist of
pointwise evaluations on the mapped nodes

$$\s_{k,\bm i}^0(v) = v|_{\Omega_k}(\n_{k,\bm i}), \quad \n_{k,\bm i} = F_k(\hat\n_{\bm i}).$$

For $\ell = 1$, it corresponds to line integrals along the mapped edges of the form
$\e_{k,\mu} := F_k(\hat\e_\mu), \mu = (d, \bm i) \in \hat\M_h^1$:

$$
\begin{align*}
    \s_{k,\mu}^1(v) &= \int_{\xi_{i_d}}^{\xi_{i_d'}}
    \Big[\bm v|_{\Omega_k}\Big(F_k(\hat{\bm x}_\mu^\e(s))\Big)\Big] \cdot
    \Big[DF_k\Big(\hat{\bm x}_\mu^\e(s)\Big) \bm e_d\Big]\, ds \\
    &= \int_{\e_{k,\mu}} \bm v|_{\Omega_k} \cdot \bm\tau
\end{align*}
$$

with orientation of $\bm \tau$ inherited from $\e_{k,\mu}$ as mapped by $F_k$. So at
$\bm x = \bm x^\e(s) = F_k(\hat{\bm x}_\mu^\e(s))$, we have

$$\bm\tau(\bm x) = \frac{\tilde{\bm \tau}(s)}{\|\tilde{\bm \tau}(s)\|}, \quad
\tilde{\bm\tau}(s) = \par{\bm x^\e}{s} = DF_k(\hat{\bm x}_\mu^\e(s)) \bm e_d.$$

Similarly, for $\ell=2$, the degrees of freedom consists of flux evaluations across mapped
faces of the form $\f_{k,\mu} := F_k(\hat\f_\mu), \mu = (d, \bm i) \in \hat\M_h^2$:

$$
\begin{align*}
    \s_{k,\mu}^2(v) &= \int_{\xi_{i_{d'}}}^{\xi_{i_{d'}'}} \int_{\xi_{i_{d''}}}^{\xi_{i_{d''}'}}
    \Big[\bm v|_{\Omega_k}\Big(F_k(\hat{\bm x}_\mu^\f(s, t))\Big)\Big] \cdot
    \Big[J_{F_k} DF_k^{-T}\Big(\hat{\bm x}_\mu^\f(s, t)\Big) \bm e_d\Big]\, ds\, dt \\
    &= \int_{\f_{k,\mu}} \bm v|_{\Omega_k} \cdot \bm n
\end{align*}
$$

Again, the orientation of $\bm n$ is inherited from $\hat \f_\mu$ as mapped by $F_k$. So at
$\bm x = \bm x^\f(s, t) = F_k(\hat{\bm x}_\mu^\f(s, t))$, we have

$$\bm n(\bm x) = \frac{\tilde{\bm n}(s, t)}{\|\tilde{\bm n}(s, t)\|}, \quad
\tilde{\bm n}(s, t) := \par{\bm x^\f}{s} \times \par{\bm x^\f}{t}
= J_{F_k} DF_k^{-T}(\hat{\bm x}_\mu^\f(s, t)) \bm e_{d}$$
 
For $\ell=3$, the degrees of freedom are local integrals on the mapped cells
$c_{k,\bm i} := F_k(\hat C_{\bm i})$:

$$
\begin{align*}
    \s_{k,\bm i}^3(v) &= \int_{\hat C_{\bm i}} \Big[v|_{\Omega_k}\Big(F_k(\hat{\bm x})\Big)\Big]
    J_{F_k}(\hat{\bm x})\, d\hat{\bm x} \\
    &= \int_{c_{k,\bm i}} v|_{\Omega_k}
\end{align*}
$$

These degrees of freedom leads to single-patch interpolation operators by proceeding as in
section
[2.6](../2_Finite_elements_preserving_the_Hodge-Helmholtz_structure/6_commuting_projections):

$$
\begin{align*}
    \Pi_k^\ell : C^0(\Omega_k) & \to V_h^\ell(\Omega_k) \\
    v & \mapsto \F_k^\ell \hat\Pi^\ell (\F_k^\ell)^{-1}(v)
    = \sum_{\mu \in \M_K^\ell} \s_{k,\mu}^\ell(v) \Lambda_{k,\mu}^\ell
\end{align*}
$$

Thus, using the degrees of freedom and the fact that $\hat\Pi^\ell$ commutes, one can
easily verify that

- $\Pi_k^\ell$ interpolates the degrees of freedom:

$$\s_{k,\mu}^\ell(\Pi_k^\ell v) = \s_{k,\mu}^\ell(v), \quad \forall\, (k,\mu) \in \M_K^\ell,$$

- $\Pi_k^\ell$ satisfies the commuting diagram property:

$$\Pi_k^{\ell+1} d^\ell v = d^\ell \Pi_k^\ell v, \quad \forall\, v \in C^1(\Omega_k).$$


## 4.3.3 Broken and conforming spaces on the multipatch domain

By extending (implicitly) every local function by zero outside its cell and summing over the
corresponding patches, we obtain a space of "broken" splines

$$V_h^{\ell,b} := \sum_{\bm k \in \mathcal K_h} V_h^{\ell}(\Omega_{\bm k}).$$

These are in general (fully) discontinuous, so they are neither $H^1$, $H(\curl)$ nor
$H(\div)$. However, on e can define *conforming spaces* by takin the intersection with the
respective spaces of the continuous de Rham sequence:

$$V_h^\ell := V_h^{\ell,b} \cap V\ell$$

We then need simple criteria to decide whether a discrete field $v_h \in V_h^{\ell, b}$ lies
in the conforming space $V_h^\ell$. For this we may use

- the interface condition given in L.B.5.1 for $H^1$ conformity,
- L.B.5.3 for $H(\curl)$ and $H(\div)$ conformity

In general, these may be difficult to evaluate, but in the case where the multi-patch
parametrization is geometrically conforming, they can be reformulated as simple relations
involving the geometrical degrees of freedom. For $\ell=0$, we need continuity across
patch elements, so the degrees of freedom associated to the same interpolation node must
coincide:

$$\n_{k,\bm i} = \n_{l,\bm j} \implies \s_{k,\bm i}^0(v_h) = \s_{l,\bm j}^0(v_h).$$

For $\ell=1$, the interface constraints consists of the continuity of the tangential traces.
Therefore, edge degrees of freedom associated to the same edge must coincide, up to
orientation:

$$\e_{k,\mu} = \e_{l,\nu}
\implies \s_{k,\mu}^1(v_h) = \varepsilon^\e(k, \mu; l, \nu) \s_{l,\nu}^1(v_h).$$

Here, $\varepsilon^\e(k, \mu; l, \nu) = \pm 1$ is the relative orientation of the mapped
edges $\e_{k,\mu}$ and $\e_{l,\nu}$, characterized by

$$\par{\bm x_{k,\mu}^\e}{s} = \varepsilon^\e(k, \mu; l, \nu) \par{\bm x_{l,\nu}^\e}{s}.$$

Note that this holds as a consequence of the above multipatch conformity assumptions.

For $\ell=2$, we have

$$\f_{k,\mu} = \f_{l,\nu}
\implies \s_{k,\mu}^2(v_h) = \varepsilon^\f(k, \mu; l, \nu) \s_{l,\nu}^2(v_h).$$


