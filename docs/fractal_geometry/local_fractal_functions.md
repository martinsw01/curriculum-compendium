# Local Fractal Functions

$\begin{align*}
    \text{Let } & X \text{ be a nonempty set} \\
    & \{X_i\}_{i=1}^N \text{ be a fmaily of subsets of } X
\end{align*}$

Suppose that $\{u_i : X_i \to X\}$ is a family of bijective mappings such that
$P=\{u_i(X_i)\}$ forms a partition of $X$

Now, suppose (Y, d_y) is a metric space.

$\begin{align*}
    \text{Let } & B(X, Y) := \{f : X \to Y | f \text{ is bounded}\} \\
    & d(f, g) := \sup_{x \in X} d_y(f(x), g(x)) \\
    & \implies (B(X, Y), d) \text{ is a complete metric space}
\end{align*}$

Similarly is $(B(X_i, Y), d)$


??? definition "Definiton. Metric Linear Space"
    A metric linear space is a cevtor space with a metric under which the operation of vector addition and scalar
    multiplication are continuous.

$B(X, Y)$ and $B(X_i, Y)$ are metric linear spaces whenever $(Y, d_Y)$ is.

Let $\nu_i : X_i \times Y \to Y$ be uniformly contractive in the second variable, and
define the R.B. operator $T: B(X, Y) \to B(X, Y)$ by

$$Tf(x):= \sum_{i=1}^{N} \nu_i \left( u_i^{-1}(x), f_i\circ u_i^{-1}(x)\right) \chi_{u_i(X_i)}(x)$$

with $f_i := f|_{X_i}$

??? proposition
    $T$ is a constractive mapping on $B(X, Y)$

    ??? proof
        Let $\begin{align*}\nu(x, y):= \sum_{i=1}^{N} \nu_i(x, y) \chi_{X_i}(x)\end{align*}$

        Then, we get

        $$
        \begin{align*}
            d(Tf, Tg) &= \sup_{x \in X} d_Y(Tf(x), Tg(x)) \\
            &\le \ell d_y(
        \end{align*}
        $$