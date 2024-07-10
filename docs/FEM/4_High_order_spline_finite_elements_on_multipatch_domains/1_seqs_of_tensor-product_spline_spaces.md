# 4.1 Sequences of tensor-product spline spaces on cartesian cells

<span>
    $\newcommand{\S}{\mathbb{S}}$
    $\newcommand{\P}{\mathbb{P}}$
</span>
On the cartesian (parametric) patch

$$\hat\Omega = (0, 1)^3,$$

we now describe the construction of discrete de Rham sequences made of tensor-product spline
spaces with maximal coordinate degree $p \ge 1$, qssociated with a grid of $N$ cell per
dimension. For this, we equip the interval $[0, 1]$ with an open knot sequence of the form

$$0 = \xi_0 = \dots = \xi_p < \xi_{p+1} < \dots < \xi_{n-1}
< \dots < \xi_n = \dots = \xi_{n+p} = 1,$$

where $n = N + p$, and the sequence is assumed symmetric ($\xi_i = 1 - \xi_{n+p-i}$) for
simplicity. The corresponding spline space is then defined as piecewise polynomials with
maximal regularity on the given subdivision. For our construction, we will consider two
consecutive degrees $q = p, p-1$:

$$\S_q = \S_q(\bm\xi) := \{v \in C^{q-1}[0, 1] : v|_{(\xi_{q+j}, \xi_{q+j+1})} \in \P_q
\quad \forall j = 0, \dots, N-1\},$$

For a piecewise polynomial of degree $q$, the maximal smoothness is $C^{q-1}$, so requiring
$C^q$-smoothness would lead to having the same polynomial in adjacent cells. Hence it would be
global over $[0, 1]$. In 1D, these two spaces have dimensions

$$\dim(\S_p) = N + p = n, \quad \dim(\S_{p-1}) = N + p - 1 = n - 1$$

and it is easy to see that they form a sequence

$$\S_p \xrightarrow{\frac{d}{dx}} \S_{p-1}$$

Tensor-product spline spaces of degree $\bm q \in \{p, p-1\}^3$ are defined on the cartesian
domain $\hat\Omega$ as

$$\S_{\bm q} := \S_{q_1} \otimes \S_{q_2} \otimes \S_{q_3}$$

obtaining a de Rham sequence in 3D:

$$V_h^0(\hat\Omega) \xrightarrow{\grad} V_h^1(\hat\Omega) \xrightarrow{\curl} V_h^2(\hat\Omega)
\xrightarrow{\div} V_h^3(\hat\Omega)$$

with

$$V_h^0(\hat\Omega) = \S_{p,p,p}
\quad V_h^1(\hat\Omega) = \begin{pmatrix}
    \S_{p',p,p} \\ \S_{p,p',p} \\ \S_{p,p,p'}
\end{pmatrix}
\quad V_h^2(\hat\Omega) = \begin{pmatrix}
    \S_{p,p',p'} \\ \S_{p',p,p'} \\ \S_{p',p',p}
\end{pmatrix}
\quad V_h^3(\hat\Omega) = \S_{p',p',p'}$$

where $p' = p-1$ for readability.