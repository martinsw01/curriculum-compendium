# 4 High order spline finite elements on multipatch domains

We will construct structure-preserving finite element spaces of high order on multipatch
domains. We will describe the construction of spline finite elements, generalizing polynomial
finite elements. Further, we will describe commuting projection operators, so we shall
construct the elements of the following diagram:

$$
\begin{matrix}
    V^0 & \xrightarrow{\grad} & V^1 & \xrightarrow{\curl} & V^2 & \xrightarrow{\div} & V^3 \\
    \downarrow \Pi^0 & & \downarrow \Pi^1 & & \downarrow \Pi^2 & & \downarrow \Pi^3 \\
    V_h^0 & \xrightarrow{\grad} & V_h^1 & \xrightarrow{\curl} & V_h^2 & \xrightarrow{\div} & V_h^3
\end{matrix}
$$

We consider the case where the computational domain $\Omega$ is decomposed in a partition of
subdomains $\Omega_k, k = 1, \ldots, K$, which are the image of a reference cube by smooth
mappings

$$\Omega_k := F_k(\hat\Omega), \quad \hat\Omega = (0, 1)^3.$$

We will assume $F_k : \hat\Omega \to \Omega_k$ to be a smooth $(C^1)$ diffeomorphism and that
the subdomains (patches) are geometrically conforming in the usual sense. (?)