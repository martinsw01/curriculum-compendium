# 1.1 Hausdorff and box dimensions

???+ definition "Definition: Hausdorff (outer) measure"
    $$\begin{align*}
        \Hauseps{s}(M) &:=
        \inf \left\{\sum_{i=1}^\infty |K_i|^s : \{K_i\}_{i=1}^\infty \text{ is an }\varepsilon\text{-cover}\right\} \\
        \H^s(M) &:= \limsup_{\varepsilon \to 0^+} \Hauseps{s}(M) \in [0, \infty]
    \end{align*}$$


??? remark "Remark: $\H^s$ monotone decreasing in $s$"
    Let $1 > \varepsilon > 0, t > s > 0$

    $$\begin{align*}
        \implies & \sum_{i\in I} |K_i|^t \le \varepsilon^{t-s} \sum_{i\in I} |K_i|^s \\
        \implies & \Hauseps{t}(M) \le \varepsilon^{t-s} \Hauseps{s}(M)
    \end{align*}$$

    === "a)"
    
        Assume $\Hauseps{s}(M) < \infty$
    
        $$\begin{align*}
            \implies & \lim_{\varepsilon \to 0^+} \Hauseps{t}(M)
            \le \lim_{\varepsilon \to 0^+} \varepsilon^{t-s} \Hauseps{s}(M) = 0\\
            \implies & \H^t(M) = 0
        \end{align*}$$

    === "b)"
        
        Assume $0 < \H^t < \infty$
        
        $$\begin{align*}
            \implies & \limsup_{\varepsilon \to 0^+} \Hauseps{s}(M) \ge
            \left(\limsup_{\varepsilon \to 0^+} \varepsilon^{s-t}\right)
            \left(\limsup_{\varepsilon \to 0^+} \Hauseps{t}(M)\right) \\
            \implies & \Hauseps{s} = +\infty
        \end{align*}$$


???+ definition "Definition: Hausdorff dimension"

    $$
    \begin{align*}
        \dim_H(M) :&= \inf \{s > 0 | \H^s(M) = 0\} \\
        &= \sup \{s > 0 | \H^s(M) = +\infty\}
    \end{align*}
    $$


??? example
    
    $\begin{align*}
        \text{Let } & M:=[0,1] \subseteq \R \\
        & r_i > 0 \\
        & K_{r_i}(x_i):=[x_i-r_i, x_i + r_i] \\
        & \varepsilon > 0
    \end{align*}$

    $\begin{align*}
        \text{Choose } & n(\varepsilon) > \frac{1}{3} \in \N \\
        & x_i:=\frac{i-\frac{1}{2}}{n(\varepsilon)} \tab i=1, ..., n(\varepsilon) \\
        & r_i:=\frac{1}{2n(\varepsilon)} \\
        \implies & [0, 1] = \bigcup_{i=1}^{n(\varepsilon)} K_{r_i}(x_i)
    \end{align*}$

    === "$s \ge 1$"
        $$
        \begin{align*}
            \Hauseps{s}(M) &\le \sum_{i=1}^{n(\varepsilon)} (2 r_i)^s \\
            & = n(\varepsilon) \left(\frac{1}{n(\varepsilon)}\right)^s \\
            &= n(\varepsilon)^{1-s} \\
            & \le \varepsilon^{s-1} \to 0
        \end{align*}
        $$

    === "$0 \le s < 1$"
        As $\left\{K_{r_i}(x_i)\right\}$ covers $[0, 1]$, we get

        $$
        \begin{align*}
            \implies \sum_{i=1}^{n(\varepsilon)} |2 r_i| & \ge 1 \\
            \implies \sum_{i=1}^{n(\varepsilon)} |2 r_i|^s &= \sum_{i=1}^{n(\varepsilon)} (2 r_i)^{s-1} |2r_i| \\
            & \ge \varepsilon^{s-1} \sum_{i=1}^{n(\varepsilon)} |2 r_i| \\
            & \ge \varepsilon^{s-1} \to +\infty \\
            \implies \lim_{\varepsilon \to 0^+} \Hauseps{s}(M) &= \infty \\
        \end{align*}
        $$

    $$\implies \dim_H [0, 1] = 1$$


??? definition "Definition: Box"
    $\begin{align*}
        \text{Let } & M \text{ be bounded} \\
        & \varepsilon > 0 \\
        & x_0 \in M
    \end{align*}$
    
    $$
    \begin{align*}
        W_\varepsilon(x_o) := \left\{x \in \R^n : \|x - x_0\|_\infty \le \frac{\varepsilon}{2}\right\}
    \end{align*}
    $$

??? definition "Definition: Box dimension"
    $\text{Let } N(\varepsilon):= \text{minimal number of cubes to cover } M$ 
    === "Lower box dimension"
        $$\underline{\dim}_B M := \liminf_{\varepsilon \to 0^+} \frac{\log N(\varepsilon)}{\log \frac{1}{\varepsilon}}$$
    === "Upper box dimension"
        $$\overline{\dim}_B M := \limsup_{\varepsilon \to 0^+} \frac{\log N(\varepsilon)}{\log \frac{1}{\varepsilon}}$$
    === "Box dimension"
        $$\underline{\dim}_B M = \overline{\dim}_B M$$

??? remark
    === "a)"
        If $c_2 \le \varepsilon^d \le N(\varepsilon) \le c_1 \varepsilon^{-d}$

        $$\implies \dim_B M = d$$

    === "b)"
        Let $M \subseteq \R^n$ be a bounded subset.

        $$\dim_H M \le \dim B M$$