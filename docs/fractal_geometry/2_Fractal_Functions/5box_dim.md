# 2.5 Box Dimension of Affine Fractal Functions

For a fractal (interpolation) function $f$ with non-uniform interpolation points $\{x_i\}$ and
maps $u_i(x) = a_i x + b_i$, $a_i \neq a_j$, it can be shown that the box dimension of the graph
of $f$ is given by the unique positive solution $d$ of

$$ \sum_{i=1}^{N} a_i^{d-1} |L_i| = 1 $$

provided that the interpolation points are not collinear and $\sum |L_i| > 1$. Otherwise,
$\dim_B\graph f = 1$.