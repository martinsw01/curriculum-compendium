# 2.2 Local Fractal Functions

$\begin{align*}
    \text{Let } & X \text{ be a nonempty set} \\
    & \{X_i\}_{i=1}^N \text{ be a family of subsets of } X \\
    & \{u_i : X_i \to X\} \text{ bijective s.t.} \\
    & P:=\{u_i(X_i)\} \text{ forms a partition of } X
\end{align*}$

Now, suppose $(Y, d_y)$ is a complete metric space.

$\begin{align*}
    \text{Let } & B(X, Y) := \{f : X \to Y | f \text{ is bounded}\} \\
    & d(f, g) := \sup_{x \in X} d_y(f(x), g(x)) \\
    & \implies (B(X, Y), d) \text{ is a complete metric space}
\end{align*}$

Similarly is $(B(X_i, Y), d)$


??? definition "Definiton. Metric Linear Space"
    A metric linear space is a cevtor space with a metric under which the operation of
    vector addition and scalar multiplication are continuous.

$B(X, Y)$ and $B(X_i, Y)$ are metric linear spaces whenever $(Y, d_Y)$ is.

Let $\nu_i : X_i \times Y \to Y$ be uniformly contractive in the second variable with
contractive constant $\ell\in[0,1)$, and define the R.B. operator
$T: B(X, Y) \to B(X, Y)$ by

$$Tf(x):= \sum_{i=1}^{N} \nu_i \left( u_i^{-1}(x), f_i\circ u_i^{-1}(x)\right) \chi_{u_i(X_i)}(x)$$

with $f_i := f|_{X_i}$

???+ proposition
    $T$ is a constractive mapping on $B(X, Y)$

    ??? proof
        $\begin{align*}\text{Let } \nu(x, y):= \sum_{i=1}^{N} \nu_i(x, y) \chi_{X_i}(x)\end{align*}$

        Then, we get

        $$
        \begin{align*}
            d(Tf, Tg) &= \sup_{x \in X} d_Y(Tf(x), Tg(x)) \\
            &= \sup_{x \in X} d_Y\left(\nu(u_i^{-1}(x), f_i\circ u_i^{-1}(x)), \nu(u_i^{-1}(x), g_i\circ u_i^{-1}(x))\right) \\
            &\le \ell\ d(f_i\circ u_i^{-1}, g_i\circ u_i^{-1}) \\
            &\le \ell\ d(f, g)
        \end{align*}
        $$

So $\exists!\ f^* \in B(X, Y)$ fixed point

???+ definition
    $f^*$ is called a **bounded local fractal function**.

???+ definition
    **Translation Invariant**

    $$d(x+a, y+a) = d(x, y)$$

    ---

    **Homogeneous**
    
    $$d(ax, ay) = |a|d(x, y)$$

    ???+ remark
        By Kakutani's theorem, any metric space has an equivalent translation invariant metric.

???+ definition
    **F-space**

    A complete metric linear space $(X, d)$ of which $d$ is translation invariant is called an F-space.

Assume that $Y$ is an F-space and let

$$\nu_i(x,y) := \lambda_i(x) + S_i(x) - y$$

where $\lambda_i \in B(X,Y), S\in B(X_i, \R)$. Furthermore, let $s_i:=\|S_i\|_\infty$ and $s:=\max\{s_i\}$.
If in addition $d_Y$ is homogeneous, we get

$$
\begin{align*}
    d_Y(\lambda_i(x) + S_i(x) y_1, \lambda_i(x) + S_i(x) y_2) &= |S_i(x)|d_Y(y_1, y_2) \\
    &\le s d_Y(y_1, y_2)
\end{align*}
$$

so $T$ is a contraction on $B(X;Y) if $s < 1$. This yields the fixed point equation

$$f^* \circ u_i^{-1} = \lambda_i + S_i \cdot f^*$$

???+ example
    $\begin{align*}
        \text{Let } & X:= [0, 1] \\
        & \{X_i\} \text{ be a collection of appropriate subintervals of } X \\
        & \{x_0:=0 < x_1 < \cdots < x_N:=1\} \text{ be a partition} \\
        & \{u_i : X_i \to [x_{i-1}, x_i]\} \text{ be a family of affine mappings}
    \end{align*}$

    Define the RB operator $T : L^p(0,1) \to L^p(0,1)$ by

    $$Tg := \sum_{i=1}^{N} (\lambda_i \circ u_i^{-1}) \chi_{u_i(X_i)} + \sum_{i=1}^{N} (S_i \circ u_i^{-1}) \cdot (g_i \circ u_i^{-1}) \chi_{u_i(X_i)}$$

    Moreover, if

    $$ \sum_{i=1}^{N} a_i \|S_i\|_{\infty, X_i}^p < 1, \quad a_i=\Lip( u_i)$$

    then $T$ is a contraction on $L^p(0,1)$.

    ???+ proof
        $$
        \begin{align*}
            \|Ty-Th\|_p^p &= \int_0^1 |Tg(x) - Th(x)|^p dx \\
            &= \sum_{i=1}^{N} \int_{x_{i-1}}^{x_i} |(S_i \circ u_i^{-1})(x) \cdot (g_i \circ u_i^{-1}(x) - h_i \circ u_i^{-1}(x))|^p dx \\
            &= \sum_{i=1}^{N} a_i \int_{X_i} |S_i(x) \cdot (g_i(x) - h_i(x))|^p dx \\
            &\le \sum_{i=1}^{N} a_i \|S_i\|_{\infty, X_i}^p \int_{X_i} |g_i(x) - h_i(x)|^p dx \\
            &\le \sum_{i=1}^{N} a_i \|S_i\|_{\infty, X_i}^p \|g_i - h_i\|_p^p \\
        \end{align*}
        $$

    For $X_i=X=[0,1]$ and $|[x_{i-1}, x_i]|=\frac{1}{N}$, we get the $\ell_p$-average:

    $$ \frac{1}{N} \sum_{1}^{N} \|S_i\|_{\infty}^p < 1$$