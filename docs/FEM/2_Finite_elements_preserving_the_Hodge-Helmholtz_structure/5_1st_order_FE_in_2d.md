# 2.5 First order Finite Elements in 2D

## 2.5.1 Abstract definition

$\newcommand{\P}{\mathcal{P}}$
$\newcommand{\Pol}{\mathbb{P}}$
$\newcommand{\W}{\mathbb{W}}$
$\newcommand{\x}{\bm{\text{x}}}$
$\newcommand{\meas}{\operatorname{meas}}$
$\newcommand{\Epsilon}{\mathcal{E}}$
$\newcommand{\Char}{\mathbb{1}}$
The traditional definition of a finite element involves a triple $(K, \P(K), \S(K))$:

- $K$ is the geometry of the elements
- $\P(K)$ is the discrete space of functions defined on $K$. The classical one is

$$\mathbb P_p(K) = \Span\left\{x \to x^\alpha \mid |\alpha| \leq p\right\}$$

- $\S(K)$ is the list of degrees of freedom, which are linear forms $\s_{K,i}$,
$i=1, \dots, n=\dim(\P(K))$ defined on som infinite dimensional space containing $\P(K)$.
These must be unisolvent:

$$
\left.\begin{align*}
    \P(K) &\to \R^n \\
    v &\mapsto \Big(\s_{K,1}(v)\Big)_{i=1}^n
\end{align*}\right\} \quad \text{is a bijection}
$$

## 2.5.2 Local and global basis functions

Local basis functions are then defined by duality:

$$\Lambda_{K,i} \in \P(K) : \s_{K,j}(\Lambda_{K,i}) = \delta_{i,j} \quad \forall\,i,j=1,\dots,n$$

Global basis functions $\Lambda_i$ are then defined by patching together the local degrees of
freedom and their basis functions. This depends on the desired smoothness:

- $H^1$: usually by by continuity
- $H(\curl)$: by continuity of tangential components.
- $H(\div)$: by continuity of normal components.
- $L^2$: no constraints.


## 2.5.3 Nodal finite elements

The lowest order $H^1$-conforming finite element space on triangles or tetrahedra are
piecewise affine functions which are globally $H_0^1$

$$V_h^0 = \{\phi \in H_0^1(\Omega) : \phi|_K \in \Pol_1(K) \quad \forall\, K \in \Tau_h\}$$

or globally $H^1$

$$\overline V_h^0 = \{\phi \in H^1(\Omega) : \phi|_K \in \Pol_1(K) \quad \forall\, K \in \Tau_h\}.$$

Usually, these are equipped with point value degrees of freedom:

$$\s^0_{K,i} : \phi \mapsto \phi(\x_{K,i}) \quad \forall\, i = 0, \dots, D$$

where $\x_{K,i}$ are the vertices of the $D$-dimensional simplex $K$. These are (locally)
unisolvent in $\Pol_1(K)$ corresponding to the basis functions

$$\lambda_{K_i}(\bm x) :=
\frac{\meas(\bm x, \x_{K,i+1}, \dots, \x_{K,i-1})}{\meas(\x_{K,i}, \x_{K, i+1}, \dots, \x_{K,i-1})}$$

It is useful to fix an orientation of $K$ by numbering the vertices such that the oriented
simplex has a positive measure.

To construct global basis functions on the global mesh $\Tau_h$, we must use combinations of
local basis functions in $H^1(\Omega)$. This means continuity, so we must choose local basis
functions associated with the vertices of the mesh. Thus, we equip homogeneous space
$V_h^0$ with the degrees of freedom

$$\s^0_i(v) := v(\x_i) \quad \forall\, \x_i \in \V_{h,0}$$

and for the inhomogeneous space $\overline V_h^0$ we use

$$\s_i(v) := v(\x_i) \quad \forall\, \x_i \in \V_h$$

where $\V_h$ is the vertices of the mesh $\Tau_h$, and
$\V_{h,0} = \V_h \setminus \partial\Omega$ is the interior vertices. Then, we obtain the
global basis functions by stitching together the barycentric coordinates

$$\Lambda_i^0(x) =
\begin{cases}
    \Lambda_{K,j}(x), & x \in K \text{ s.t. } \exists\, j : \x_{K,j} = \x_i \\
    0, & \text{otherwise}
\end{cases}
$$

where $\Lambda_{K,j} = \lambda_{K,j}$ are the local basis functions. One can verify that the
global spaces $V_h^0, \overline V_h^0$ are spanned by these nodal functions:

$$V_h^0 = \Span\{\Lambda_i^0 : x_i \in \V_{h,0}\}, \quad
\overline V_h^0 = \Span\{\Lambda_i : x_i \in \V_h\}$$


## 2.5.4 Curl-conforming finite elements

Whitney finite elements represent a historical approach to discretize $H(\curl)$ fields.
On a tetrahedra, they correspond to polynomials on the form

$$\W(K) \equiv \R^3 \oplus (\bm x \times \R^3)
= \{K \ni \bm x \mapsto \bm a + \bm x \times \bm b \mid \bm a, \bm b \in \R^3\}$$

which are globally in $H(\curl)$. The Whitney finite element space with homogeneous
boundary conditions reads

$$V_h^1 = \{\bm v \in H_0(\curl; \Omega) : \bm v|_K \in \W(K) \quad \forall\, K \in \Tau_h\}$$

and similarly without boundary conditions

$$\overline V_h^1 = \{\bm v \in H(\curl; \Omega) : \bm v|_K \in \W(K) \quad \forall\, K \in \Tau_h\}.$$

Curl-conformity constraints corresponds to imposing tangential continuity of the discrete
vector fields across the element interfaces. This is imposed by the degrees of freedom

$$\s_{K,i}^1(\bm v) = \int_{e_{K,i}} \bm \tau_{K,i} \cdot \bm v \quad \forall\, e_{K,i} \in \Epsilon(K)$$

where $\Epsilon(K)$ is the edges of $K$. These edges can aslo be oriented by fixing a
starting and ending vertex: $e_{K,i} = (\x_{K,j}, \x_{K,k})$ means moving forward along
$e_{K,i}$ from $\x_{K,j}$ to $\x_{K,k}$. The tangent vector for
$e_{K,i} = (\x_{K,j}, \x_{K,k}) \in \Epsilon(K)$ is then

$$\bm \tau_{K,i} = \frac{\x_{K,k} - \x_{K,j}}{|\x_{K,k} - \x_{K,j}|_2}$$

and each edge is counted only once. One can again use the barycentric coordinates to
construct the local basis functions:

$$\bm w_{K,i} = \lambda_{K,j} \nabla \lambda_{K,k} - \lambda_{K,k} \nabla \lambda_{K,j}$$

for each edge $e_{K,i} = (\x_{K,j}, \x_{K,k}) \in \Epsilon(K)$. On the global domain,
define the degree of freedom

$$\sigma_i^1(\bm v) = \int_{e_i} \bm \tau_i \cdot \bm v$$

for all $e_i \in \Epsilon_h$ edges if $\Tau_h$. By choosing a direction for the tangent
$\tau_i$, the orientation of the edge $e_i$ gets fixed. For The homogeneous space, we
define

$$\sigma_i^1(\bm v) = \int_{e_i} \bm \tau_i \cdot \bm v \quad \forall\, e_i \in \Epsilon_{h,0}$$

for the interior edges
$\Epsilon_{h,0} = \{e_i \in \Epsilon_h \mid e_i \not\subset \partial\Omega\}$. Taking into
consideration the orientation of the edges, we get the global basis functions

$$\bm \Lambda_i^1(x) =
\begin{cases}
    \pm \bm \Lambda_{K,j}^1(x), & x \in K \text{ s.t. } 
    \exists\, j : e_{K,j} = e_i \text{ with } \tau_{K,j} = \pm \tau_i \\
    0, & \text{otherwise}
\end{cases}
$$

where $\bm \Lambda_{K,j}^1 = \bm w_{K,j}$. It can again be verified that

$$V_h^1 = \Span\{\bm \Lambda_i^1 : e_i \in \Epsilon_{h,0}\}, \quad
\overline V_h^1 = \Span\{\bm \Lambda_i^1 : e_i \in \Epsilon_h\}$$


## 2.5.5 Face (cell) finite elements

In 2D, the third space consists of (scalar-valued) piecewise constant functions

$$V_h^2 = \{v \in L^2(\Omega) : v|_K \in \Pol_0(K) \quad \forall\, K \in \Tau_h\}$$

equipped with the degrees of freedom

$$\s_{K,i}^2(v) = \int_{K} v \quad \forall\, K_i \in \Tau_h$$

for which the associated basis functions are the characteristic functions

$$\Lambda_i^2(\bm x) = \Char_{K_i}(\bm x) \quad \forall\, K_i \in \Tau_h$$

---

We can verify that the operators map on the respective spaces. From $V_h^0 \subset H_0^1(\Omega)$,
we get that $\bm\grad V_h^0 \subset L^2(\Omega)$. Particularly, for $\phi \in V_h^0$ we have that
$\bm\grad \phi$ is piecewise constant and $\curl\bm\grad \phi = 0$, so
$\bm\grad \phi \in V_h^1$. The second inclusion is even easier to verify. 