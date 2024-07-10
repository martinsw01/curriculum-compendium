# 3.2 FEM approximation

<span style="display: hidden">
    $\newcommand{\B}{\mathfrak{B}}$
    $\newcommand{\H}{\mathfrak{H}}$
    $\newcommand{\Z}{\mathfrak{Z}}$
    $\newcommand{\L}{\mathcal{L}}$
</span>

## 3.2.1 Approximation of Hilbert-complexes

A structure-preserving discretization of the Hodge-Laplace source problem is provided by
a *Hilbert subcomplex* $(V_h, d)$ of the form

$$V_h^{l-1} \xrightarrow{d^{l-1}} V_h^\ell \xrightarrow{d^\ell} V_h^\ell$$

with finite-dimensional subspaces $V_h^\ell \subset V^\ell$ associated with some mesh
of resolution $h$. Defining discrete differential operators as the restriction of the
continuous ones to the discrete spaces

$$d_h^\ell := d^\ell : V_h^\ell \to V_h^{\ell+1}$$

We consider the adjoint discrete differential operators
$d_{\ell+1,h}^* : V_h^{\ell+1} \to V_h^\ell$ defined by the relations

$$\inner{d_{\ell+1,h}^* q}{v} = \inner{q}{d^\ell v}
\quad \forall\, q \in V_h^{\ell+1}, v \in V_h^\ell.$$

The dual discrete complex then reads

$$V_h^{\ell-1} \xleftarrow{d_{\ell,h}^*} V_h^\ell \xleftarrow{d_{\ell+1,h}^*} V_h^{\ell+1}$$

Note that in the discrete setting, the domain of the differential operators and their
adjoints coincide. This follopws from the fact that the adjoint differentials $d_\ell^*$
are discretized in a *weak sense*, while the primal ones $d_\ell$ are discretized in a
*strong sense*.

The stability of this discretization is then linked to the existence of a cochain projection
$\pi_h$ bounded in the $V$-norm. That is, a sequence of projection operators
$\pi_h^\ell : V^\ell \to V_h^\ell$ that satisfy the commutative diagram property

$$d^\ell \pi_h^\ell = \pi_h^{\ell+1} d^\ell \text{ on } V_h^\ell.$$

and with a $C>0$ such that

$$\|\pi_h v\|_V \le C\|v\|_V \quad \forall\, v \in V^\ell$$

Similarly to the continuous case, we denote

$$
\begin{align*}
    \B_h^\ell &= \Im(d_h^{l-1}) \subset V_h^\ell, 
    & \Z_h^\ell &= \ker(d_h^\ell) \subset V_h^\ell \\
    \B_{\ell,h}^* &= \Im(d_{\ell+1,h}^*) \subset V_h^{\ell+1},
    & \Z_{\ell,h}^* &= \ker(d_{\ell,h}^*) \subset V_h^\ell
\end{align*}
$$

As the discrete operators are bounded, we have


$$
\begin{align*}
    \B_h^\ell = V_h^\ell \cap (\Z_{\ell,h}^*)^{\perp_W} =: \Z_{\ell,h}^{*\perp} \\
    \B_{\ell,h}^* = V_h^\ell \cap (\Z_h^\ell)^{\perp_W} =: \Z_h^{\ell\perp}
\end{align*}
$$


As before, it follows from the sequence property
$d_h^\ell d_h^{\ell-1} = d^\ell d^{\ell-1} = 0$ that $B_h^\ell \subseteq \Z_h^\ell$, in
particular that $B_h^\ell$ is orthogonal to $\Z_h^{\ell\perp}$. The *discrete harmonic
fields* are then defined as

$$\H_h^\ell := (\B_h^\ell)^{\perp_W} \cap \Z_h^\ell \subset V_h^\ell$$

which yields a discrete *Helmholtz-Hodge decomposition*:

$$V_h^\ell = \Z_h^\ell \opp \Z_h^{\ell\perp} = \B_h^\ell \opp \H_h^\ell \opp \B_{\ell,h}^*$$

The discrete sequence is said to be exact when $\B_h^\ell = \Z_h^\ell$, i.e. when
the space of harmonics $\Z_h^\ell$ is trivial.

The following **FEM-apporximation** of the Hodge-Laplace problem thus reads

$$
\begin{align*}
    &\text{Find } (\s_h, u_h, p_h) \in V_h^{l-1} \times V_h^\ell \times \H_h^\ell \text{ s.t.} \\
    &\quad \left\{\begin{aligned}
        \inner{\s_h}{\tau} - \inner{d\tau}{u_h} &= 0
        && \forall\, \tau \in V_h^{l-1} \\
        \inner{d\s_h}{v} + \inner{du_h}{dv} + \inner{p_h}{v} &= \inner{f}{v}
        && \forall\, v \in V_h^\ell \\
        \inner{u_n}{q} &= 0
        && \forall\, q \in \H_h^\ell
    \end{aligned}\right.
\end{align*}
$$

Well-posedness of this problem will be studied in the next sections.