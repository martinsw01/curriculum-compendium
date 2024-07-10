# 1.2 Maxwell equations

## 1.2.1 Time-dependent Maxwell equations

|           |                |
|-----------|----------------|
| $\bm E$ | Electric field |
| $\bm H$       | Magnetic field |
| $\bm J$       | Current density |
| $\rho$    | Charge density |
| $\bm D$       | Electric displacement field |
| $\bm B$       | Magnetic induction field |

The maxwell equations are given by

$$
(M) \quad \begin{cases}
    \partial_t \bm D - \curl \bm H &= -\bm J \\
    \partial_t \bm B + \curl \bm E &= 0 \\
\end{cases} \quad \text {subject to} \quad \begin{cases}
    \div \bm D &= \rho \\
    \div \bm B &= 0 \\
\end{cases}
$$

In linear media, we have

$$
\begin{align*}
    \bm D &= \varepsilon \bm E \\
    \bm B &= \mu \bm H
\end{align*}
$$

where $\varepsilon$ and $\mu$ are the permeability terms. In (perfect, ) isotropic and 
homogeneous media, these are reduced to to scalar constants. Now, assume
$\varepsilon = \mu = 1$. Then, we end up with the following equations:

$$
\begin{cases}
    \partial_t \bm E - \curl \bm B &= -\bm J \\
    \partial_t \bm B + \curl \bm E &= 0
\end{cases} \quad \text{subject to} \quad \begin{cases}
    \div \bm E &= \rho \\
    \div \bm B &= 0
\end{cases}
$$

Usually, one studies an open, bounded, connected domain $\Omega \subset \R^3$ with
Lipschitz boundary $\partial\Omega$. Therefore, we need a few boundary conditions:

$$
\begin{cases}
    \bm n \times \bm E &= 0 \quad \text{on } \partial\Omega & \bm E \text{ normal to } \partial\Omega \\
    \bm n \cdot \bm B &= 0 \quad \text{on } \partial\Omega & \bm B \text{ tangential to } \partial\Omega
\end{cases}
$$

Additionally, we have the conservation law

$$\div \bm J = -\partial_t \rho$$


## 1.2.2 Time-harmonic Maxwell equations

Let $\bm J$ be an oscillating source in time.

$$
\begin{align*}
    \bm J(t, \bm x) &= \Re\left\{e^{-i\omega t}\hat{\bm J} (\bm x)\right\} \\
    \rho(t, \bm x) &= \Re\left\{e^{-i\omega t}\hat\rho(\bm x)\right\}
\end{align*}
$$

This yields solutions of the form

$$
\begin{align*}
    \bm E(t, \bm x) &= \Re\left\{e^{-i\omega t}\hat{\bm E} (\bm x)\right\} \\
    \bm B(t, \bm x) &= \Re\left\{e^{-i\omega t}\hat{\bm B} (\bm x)\right\}
\end{align*}
$$

The Maxwell equations then become

$$
\begin{cases}
    \hat{\bm J} = i\omega \hat{\bm E} + \curl \hat{\bm B} \\
    0 = i\omega \hat{\bm B} - \curl \hat{\bm E}
\end{cases} \quad \text{subject to} \quad \begin{cases} 
    \div \hat{\bm E} = \hat\rho \\
    \div \hat{\bm B} = 0
\end{cases}
$$

so the source must satisfy

$$\div \hat{\bm J} = -i\omega \hat\rho$$

We can reformulate these using only $\bm E$:

$$
\begin{cases}
    i\omega \hat{\bm J} = -\omega^2 + \curl \curl \hat{\bm E} \\
    \hat\rho = \div \hat{\bm E}
\end{cases} \quad \text{ subject to } \quad \div \hat{\bm E} = \hat\rho
$$

and define $\hat{\bm B} = (i\omega)^{-1}\curl \hat{\bm E}$.

## 1.2.3 Static Maxwell equations

$$
\begin{cases}
    \div \bm E = \rho \\
    \div \bm B = 0 \\
    \curl \bm E = 0 \\
    \curl \bm B = \bm J
\end{cases}
$$