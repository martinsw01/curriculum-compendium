# 6 Second order Elliptic PDEs

We want to study the problem

$$
\left\{\begin{align*}
    L u &= f && \text{in } \Omega \\
    u &= g && \text{on } \partial\Omega
\end{align*}\right. \tag{1}
$$

for some $\Omega$ open and bounded, given
$f : \Omega \to \R, g : \partial \Omega \to \R$ and a second order partial derivative
operator $L$ of the *divergence form*

$$Lu(x) = - \sum_{i,j=1}^{n} \Big(a^{ij}(x) u_{x_i}\Big)_{x_j} + \sum_{i=1}^{n} b^i(x) u_{x_i} + c(x)u$$

or the *non-divergence form*

$$Lu(x) = - \sum_{i,j=1}^{n} a^{ij}(x) u_{x_i x_j} + \sum_{i=1}^{n} b^i(x) u_{x_i} + c(x)u$$

where $a^{ij}, b^i, c$ are called the coefficients of the operator $L$.


???+ remark "Remark 6.1"
    <a id="r61"></a>If the coefficients $a^{ij} \in C^1(\Omega)$, the two forms are equivalent.

We will consider the symmetric case $a^{ij} = a^{ji}$.

???+ definition "Definition 6.2"
    ## Uniformly elliptic

    The PDE operator $L$ is **uniformly elliptic** if there exists a constant $\theta > 0$
    such that for all $\xi \in \R^n$

    $$\sum_{i,j=1}^{n} a^{ij}(x) \xi_i \xi_j \geq \theta |\xi|^2 \quad \text{a.e. in } \Omega$$

    This is equivalent to say that the matrix with entries $a^{ij}(x)$ is uniformly positive
    definite with the least eigenvalue bounded from below by $\theta$.

???+ example "Example 6.3"
    $$
    \begin{align*}
        a^{ij}(x) &= \delta_{ij} \\
        b^i = c &= 0
    \end{align*} \implies Lu = -\Delta u
    $$


| Term order     | Type               |
|----------------|--------------------|
| 2<sup>nd</sup> | Diffusion          |
| 1<sup>st</sup> | Transport          |
| 0<sup>th</sup> | Creation/depletion |
