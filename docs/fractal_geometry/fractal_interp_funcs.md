# Fractal Interpolation Functions

$\begin{align*}
    \text{Let } & \N_N:=\{1, ..., N\} \\
    & \N_{0,N}:=\{0, ..., N\} \\
    & Y:= \left\{(x_\nu, y_\nu) \in \R^2 :
    \begin{matrix}
        a = x_0 < x_1 < ... < x_N = b \\
        y_\nu \in \R, \ \nu \in \N_{0,N}
    \end{matrix}
    \right\} \\
    & L_i \in (-1, 1) \\
    &A_0:=[a, b]^2 \in \H^(\R^2) \\
    &a_i:=\frac{x_i-x_{i-1}}{b-a} \\
    &b_i:=\frac{y_i-y_{i-1}-L_i(y_N-y_0)}{b-a} \\
    &w_i(x, y):=
    \begin{bmatrix}
        a_i & 0 \\
        b_i & L_i
    \end{bmatrix} \\
\end{align*}$

![img.png](img.png)

Define the IRF $([a, b]\times\R, W)$, $W=\{w_i\}$ with

$$W(A)=\bigcup_{i=1}^{N} \omega_i(A)$$

Then, there exists a unique attractor $G$. Barnlsey showed that $G$ is the graph of the continuous function

$$f : [a, b] \to \R$$

that maps $x_\nu \mapsto y_\nu$.


???+ definition "Definition: Affine Fractal Interpolation Function"

    ## Affine Fractal Interpolation Function

    The $f$ above is called the **affine fractal interpolation function**

$\begin{align*}
    \text{Let } & \alpha_i = \frac{b x_{i-1} - a x_i}{b-a} \\
    & \beta_i = \frac{b y_{i-1} - a y_i - L_i(b-a)}{b-a}
\end{align*}$        

Define $f$ such that

$$
\begin{align*}
    \left.\begin{cmatrix}
        \overline x \\
        f(\overline x)
    \end{cmatrix}\right|_{x\in[x_{i-1}, x_i]}
    &=\omega_i \left.\begin{cmatrix}
        x \\
        f(x)
    \end{cmatrix}\right|_{x\in[a, b]} \\
    \left.\begin{cmatrix}
        \overline x \\
        f(\overline x)
    \end{cmatrix}\right|_{x\in[x_{i-1}, x_i]}
    &=\omega_i \left.\begin{cmatrix}
        a_i & 0 \\
        b_i & L_i
    \end{cmatrix}
    \begin{cmatrix}
        x \\
        f(x)
    \end{cmatrix}\right|_{x\in[a, b]}
    +\begin{cmatrix}
        \alpha_i \\
        \beta_i
    \end{cmatrix}
\end{align*}
$$

$\begin{align*}
    \text{Let } u_i : [a, b] &\to [x_{i-1}, x_i] \\
    x & \mapsto a_i x +´\alpha_i \\
    p_i : [a, b] & \to \R \\
    x&\mapsto b_i x + \beta_i
\end{align*}$

Then, for each $\overline x\in[x_{i-1}, x_i] \ \exists! x \in [a, b] : \overline x = u_i(x)$,
i.e. $x = u_i^{-1}(\overline x)$. Then we get

$$
\begin{align*}
    f(\overline x) = p_i(x) + L_i f(x), \tab \overline x\in[x_{i-1}, x_i] \\
    f(\overline x) = (p_i \circ u_i^{-1})(\overline x) + L_i (f \circ u_i^{-1})(\overline x)
\end{align*}
$$

This yields the fixed point equation

$$f(x) = \sum_{i=1}^{N} (p_i \circ u_i^{-1})(x) \chi_{[x_{i-1}, x_i)} + \sum_{i=1}^{N} L_i(f \circ u_i^{-1})(x) \chi_{[x_{i-1}, x_i)}$$

Then we can define the Read-Bajraktarevic (RB) operator

$$
\begin{align*}
    T : C[a, b] & \to C[a, b] \\
    g &\mapsto \sum_{i=1}^{N} (p_i \circ u_i^{-1})(x) \chi_{[x_{i-1}, x_i)} + \sum_{i=1}^{N} L_i(g \circ u_i^{-1})(x) \chi_{[x_{i-1}, x_i)}
\end{align*}
$$


???+ theorem

    $T$ is a contraction on $(C[a, b], \|\cdot\|_\infty)$ with $L=\max |L_i|$
    
    
    ??? proof
        
        $\begin{align*}
            \text{Let } & x\in[a, b] \\
            & g, h \in C[a, b]
        \end{align*}$

        $$
        \begin{align*}
            \implies |Tg(x)  - Th(x)|
            &\le \sum_{i=1}^{N} L_i \left|(g \circ u_i^{-1}(x) - (h \circ u_i^{-1}(x)\right| \chi_{[x_{i-1}, x_i)}(x) \\
            & \le L \|g-h\|_\infty
        \end{align*}
        $$


???+ example

    $\begin{align*}
        \text{Let } & X = [0, 1] \times \R \\
        & N=2 \\
        & Y:=\left\{(0,0), \left(\frac{1}{2}, \frac{1}{2}\right), (1, 0)\right\}
    \end{align*}$

    === "1"
        $\begin{align*}
            \text{Let } u_1 : [0, 1] & \to [0, 1] \\
            x & \mapsto \frac{1}{2}x \\
            u_2 : [0, 1] & \to [0, 1] \\
            x & \mapsto \frac{1}{2}(x+1) \\
            p_1 : [0, 1] & \to \R \\
            x & \mapsto \frac{1}{2}x \\
            p_2 : [0, 1] & \to \R \\
            x & \mapsto \frac{1}{2}(x-1) \\
            & Tf(x) =
            \begin{cases}
                x + \frac{1}{4}f(2x), & x \in \left[0, \frac{1}{2}\right) \\
                1- x + \frac{1}{4}f(2x-1), & x \in \left[\frac{1}{2}, 1\right]
            \end{cases}
        \end{align*}$

        $$ \implies f^*(x) = 2x (1-x)$$

    === "2"
        $$Tf(x)=
        \begin{cases}
            x+\frac{1}{2}(2x) , x \in \left[0, \frac{1}{2}\right) \\
            1-x+\frac{1}{2}(2x-1) , x \in \left[\frac{1}{2}, 1\right]
        \end{cases}
        $$

        $$ \implies f^* \text{ is the Takagi-function}$$
        