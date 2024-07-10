# 1 Introduction

## 1.1 Notation

**Derivatives**:

$$
\begin{align*}
    \nabla u(x_0) &= \left(\par{u}{x_1}(x_0), \par{u}{x_2}(x_0), \dots, \par{u}{x_n}(x_0)\right) \in \R^n \\
    &= \left(\partial_{x_1}u(x_0), \partial_{x_2}u(x_0), \dots, \partial_{x_n}u(x_0)\right) \\
    D^2 u(x_o) &\in R^{n\times n} \\
    \left(D^2u(x_0)\right)_{ij} &= \par{^2u}{x_i\partial x_j}(x_0)
\end{align*}
$$

**Multi-index notation**:

Let $\alpha = (\alpha_1, \alpha_2, \dots, \alpha_n) \in (\N_0)^n$ be a multiindex and
$|\alpha| = \alpha_1 + \alpha_2 + \dots + \alpha_n$ be its order. We write

$$D^\alpha u(x_0) := \frac{\partial^{|\alpha|}u}{\partial x_1^{\alpha_1}\partial x_2^{\alpha_2}\dots\partial x_n^{\alpha_n}}(x_0) = \partial_{x_1}^{\alpha_1}\partial_{x_2}^{\alpha_2}\dots\partial_{x_n}^{\alpha_n}u(x_0)$$

The set of all partial derivatives of $u$ of order $k\in \N_0$ at $x_0$ is denoted by

$$D^k u(x_0) = \left\{D^\alpha u(x_0) \mid |\alpha| = k\right\}$$

These are usually ordered:

$$
\begin{align*}
    D^1 u(x_0) &= \Delta u(x_0) \\
    D^2 u(x_0) &= H u(x_0) \\
    & \vdots
\end{align*}
$$


## 1.2 PDEs

Given $F : \R^{n^k} \times \R^{n^{k-1}} \times \dots \times \R^n \times \R \times U \to \R$, a PDE
of order $k$ kan be written as

$$F\left(D^k u(x), D^{k-1}u(x), \dots, Du(x), u(x), x\right) = 0$$

The questions we usually ask are

1. Does a solution exist?
2. Is it unique?
3. Does it depend continuously on the data?

We will mainly study linear PDEs:

$$\sum_{|\alpha| \leq k} a_\alpha(x)D^\alpha u(x) = f(x)$$

Examples are

1. The Laplace equation: $\Delta u = 0$
2. The Poisson equation: $\Delta u = f$
3. The heat equation: $u_t - \Delta u = 0$
4. The wave equation: $u_{tt} - \Delta u = 0$
5. The Schrödinger equation: $iu_t + \Delta u = 0$
6. The Transport equation: $u_t + \inner{b}{D u(x)} = 0$