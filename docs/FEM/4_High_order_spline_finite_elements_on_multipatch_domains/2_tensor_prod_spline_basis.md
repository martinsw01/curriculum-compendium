# 4.2 Tensor-product spline basis

<span style="display: none">
    $\newcommand{\S}{\mathbb{S}}$
    $\newcommand{\n}{\operatorname{n}}$

[//]: # (    $\newcommand{\P}{\mathbb{P}}$)
</span>
Several spline bases can be defined on $\S_p$. B-splines are those with minimal
support, while geometric (interpolation/histopolation) splines are convenient to define
commuting projection operators. In each case, the bases can be defined as tensor products of
univariate splines defined on the interval $(0, 1)$.

## 4.2.1 B-splines

For $i=0, \dots, n-1$ and $q \in \{p-1, p\}, we let $B_i^q$ be the normalized B-spline of
degree q associated with the knots $(\xi_i, \dots, \xi_{i+q+1})$. These splines can be
defined iteratively by the Cox-de Boor recursion formula:

$$
\begin{align*}
    B_i^0(x) &= I_{[\xi_i, \xi_{i+1})}(x) \\
    B_i^p(x) &= \frac{x - \xi_i}{\xi_{i+p} - \xi_i} B_i^{p-1}(x)
    + \frac{\xi_{i+p+1} - x}{\xi_{i+p+1} - \xi_{i+1}} B_{i+1}^{p-1}(x)
\end{align*}
$$

The main properties of the B-splines are:

- minimal support: $B_i^q$ is the only spline (up to a constant) supported in the interval
    $[\xi_i, \xi_{i+q+1})$. Any spline supported in a smaller interval  is identically zero.
- non-negativity
- partition of unity:

$$\sum_{i=0}^{n-1} B_i^q = 1 \quad \text{ in } [0, 1].$$

The spline space $\S_q$ is spanned by the B-splines $B_i^q$ for $i=0, \dots, n-1$. Notice
that $B_0^{p-1}$ has empty support, but is kept in the formulas for simplicity. The number of
B-splines matches the dimension of $\S_q$.

The derivative of a $p$-degree spline is a $(p-1)$-degree spline. In particular, we have

$$\frac{d}{dx} B_i^p = M_i^{p-1} - M_{i+1}^{p-1},
\quad\quad M_i^{p-1} := \frac{p}{\xi_{i+p} - \xi_i} B_i^{p-1}.$$

By using these B- and M-splines for the $p$ and $p-1$ spline spaces, we then obtain a
simple matrix for the derivative operator. For the tensor product spaces, we then use the
following combination of univariate B- and M-splines:

$$
\left\{\begin{align*}
    \hat\Lambda_{\bm i}^{0,B}(\bm x)
    &:= \prod_{d=1}^{3} B_{i_d}^p(x_d),
    &\bm i & \in \hat\M_h^0 \\
    \hat\Lambda_{d,\bm i}^{1,B}(\bm x)
    &:= \bm e_d M_{i_d}^{p-1}(x_d)
    \prod_{\substack{d'=1 \\ d' \neq d}}^3 B_{i_{d'}}^p(x_{d'}),
    &(d, \bm i) & \in \hat\M_h^1 \\
    \hat\Lambda_{d,\bm i}^{2,B}(\bm x)
    &:= \bm e_d B_{i_d}^p(x_d)
    \prod_{\substack{d'=1 \\ d' \neq d}}^3 M_{i_{d'}}^{p-1}(x_{d'}),
    &(d, \bm i) & \in \hat\M_h^2 \\
    \hat\Lambda_{\bm i}^{3,B}(\bm x)
    &:= \prod_{d=1}^{3} M_{i_d}^{p-1}(x_d),
    &\bm i & \in \hat\M_h^3
\end{align*}\right.
$$

where the multi-index sets are defined as

$$
\begin{cases}
    \hat\M_h^0 := [\![0, n-1]\!]^3 \\
    \hat\M_h^1 := \{(d, \bm i) \mid d \in [\![1, 3]\!], \bm i \in [\![0, n-1]\!]^3, i_d \ge 1\} \\
    \hat\M_h^1 := \{(d, \bm i) \mid d \in [\![1, 3]\!], \bm i \in [\![0, n-1]\!]^3, i_{d\pm 1} \ge 1\} \\
    \hat\M_h^3 := [\![1, n-1]\!]^3.
\end{cases}
$$

## 4.2.2 Geometric degrees of freedom

On each patch, it is convenient to consider degrees of freedom corresponding to the
interpolation/histopolation approach. This construction may be called geometric as it is based
on evaluating the functions on geometrical elements of increasing dimensions, as involved in
the Stokes integration theorem. On the interval $(0, 1)$, we consider $n$ interpolation nodes

$$0 = \n_0 < \n_1 < \dots < \n_{n-2} < \n_{n-1} = 1$$

compatible with the B-splines in the sense that $B_i^p(\n_j) > 0$. Equivalently, we have that
$\xi_i < \n_i < \xi_{i+p+1}$ for $i=0, \dots, n-1$.

To equip the multivariate (tensor-product) splice space with degrees of freedom, we define
a grid of the cartesian patch $\hat\Omega$, with the following geometrical elements:

- nodes:

$$\hat n_{\bm i} = (\n_{i_1}, \n_{i_2}, \n_{i_3}), \quad \bm i \in \hat\M_h^0,$$

- small edges:

$$\hat e_{d, \bm i} = [\hat n_{\bm i}, \hat n_{\bm i + \bm e_d}], \quad (d, \bm i) \in \hat\M_h^1,$$

- small faces:

$$\hat f_{d, \bm i} = [\hat e_{d+1, \bm i}, \hat e_{d+1, \bm i + \bm e_{d-1}}], \quad (d, \bm i) \in \hat\M_h^2,$$

- small cells (subcells):

$$\hat C_{\bm i} = [\hat f_{1, \bm i}, \hat f_{1, \bm i + \bm e_1}], \quad \bm i \in \hat\M_h^3,$$

where $[\cdot]$ denotes the convex hulls.

On these geoemtrical elements, we define the pointwise and integral degrees of freedom,

$$
\left\{\begin{align*}
    \s_{\bm i}^0(\phi) &:= \phi(\hat n_{\bm i}),
    & \bm i \in \hat\M_h^0, \\
    \s_{d, \bm i}^1(\bm v) &:= \int_{\hat e_{d, \bm i}} \bm e_d \cdot \bm v,
    & (d, \bm i) \in \hat\M_h^1, \\
    \s_{d, \bm i}^2(\bm C) &:= \int_{\hat f_{d, \bm i}} \bm e_d \cdot \bm C,
    & (d, \bm i) \in \hat\M_h^2, \\
    \s_{\bm i}^3(\rho) &:= \int_{\hat C_{\bm i}} \rho,
    & \bm i \in \hat\M_h^3.
\end{align*}\right.
$$

These geometrical degrees of freedom are unisolvent, as we will see in the next section.
Another advantage is that they allow to define commuting projection operators using
the same arguments as seen in section
[2.5](../../2_Finite_elements_preserving_the_Hodge-Helmholtz_structure/5_1st_order_FE_in_2d)
(based on Stokes' theorem) for simplicial elements.