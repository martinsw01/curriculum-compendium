# 5.3 Extensions and traces of Sobolev functions

??? theorem "Theorem 5.14"
    ## Extension <a id="t514"></a>

    $\begin{align*}
        \text{Let } & \Omega \subset \R^n \text{ be bounded s.t.} \\
        & \partial \Omega \in C^1 \\
        & V \text{ open } : \Omega \Subset V \\
    \end{align*}$

    $$
    \begin{align*}
        \implies \exists\, E & \in L(W^{1,p}(\Omega), W^{1,p}(\R^n)) \text{ s.t.} \\
        &(1) \quad E u = u \quad \text{ a.e. in } \Omega \\
        &(2) \quad \Supp(E u) \subset V \\
        &(3) \quad \|E u\|_{W^{1,p}(\R^n)} \leq C \|u\|_{W^{1,p}(\Omega)},
        \quad C = C(p, \Omega, V)
    \end{align*}
    $$

    $Eu$ is called an **extension** of $u$ in $\R^n$.

    ??? proof
        **Step 1**: $\partial \Omega$

        Fix $x^0 \in \partial\Omega$ and suppose there is a neighborhood of $x^0$ such that
        $\partial\Omega$ is flat. Without loss of generality, say $x_n=0$. Then, there is a
        ball $B = B(x^0, r)$ in that neighborhood. Let

        $$
        \begin{align*}
            B^+ &:= B \cap \{x_n \ge 0\} \subset \overline \Omega \\
            B^- &:= B \cap \{x_n \le 0\} \subset \Omega^c \\
        \end{align*}
        $$

        **Step 2**: Local extension by reflection

        Assume $u \in C^1(\overline \Omega)$ and define

        $$
        \overline u := \begin{cases}
            u(x), & x \in B^+ \\
            -3u(x', -x_n) + 4u(x', -x_n/2), & x \in B^-
        \end{cases}
        $$

        ??? proof "Claim: $\overline u \in C^1(B)$"
            $\begin{align*}
                \text{Let } & u^-:= \overline u|_{B^-} \\
                &u^+ := \overline u|_{B^+}
            \end{align*}$

            $$
            \begin{align*}
                \implies \partial_{x_n} u^-(x)|_{x_n=0}
                &= \left.\left(3 \partial_{x_n} u(x', -x_n)
                - 2 \partial_{x_n} u\left(x', -\frac{x_n}{2}\right)\right)\right|_{x_n=0} \\
                &= \partial_{x_n} u(x)|_{x_n=0} \\
                &= \partial_{x_n} u^+(x)|_{x_n=0}
            \end{align*}
            $$
            
            The continuity of the other partial derivatives are trivial.

        One can easily check that there is a $C(p)$ such that

        $$\|D^\alpha \overline u\|_{L^p(B)} \leq C(p) \|D^\alpha u\|_{L^p(B^+)}$$

        **Step 3**: Loacl to global extension via partition of unity

        Consider the case that $\partial \Omega$ is not flat, and recall that

        $$\partial \Omega \in C^1 \iff \begin{cases}
            \forall x^0 \in \partial \Omega\
            \exists\, r>0, \gamma : \R^{n-1} \to \R \text{ s.t.} \\
            \Omega \cap B(x^0, r) = \{x \in B(x^0, r) : x_n > \gamma(x')\}
        \end{cases}$$

        Fix any $x^0 \in \partial \Omega$ and choose $r, \gamma$ as above. Define

        $$
        \begin{align*}
            y_i = x_i =: & \Phi^i(x), \quad i = 1, \dots, n-1 \\
            y_n = x_n - \gamma(x') =: & \Phi^n(x)
        \end{align*}
        $$

        We may write $y = \Phi(x)$, where $\Phi : B(x^0, r) \to \R^n$. Define further

        $$
        \begin{align*}
            x_i = y_i =: & \Psi^i(y), \quad i = 1, \dots, n-1 \\
            x_n = y_n + \gamma(y') =: & \Psi^n(y)
        \end{align*}
        $$

        Similarly, we may write $x = \Psi(y)$, so $\Phi = \Psi^{-1}$ and the map
        $x \mapsto \Psi(x) = y$ flatten out the boundary near $x^0$, as

        $$\Phi(\{x : x_n = \gamma(x')\}) = \{y : y_n = 0\}$$

        ??? proof "Claim: $\Phi$ is a $C^1$ diffeomorphism"
            The Jacobian of $\Phi$ is

            $$
            D\Phi = \begin{pmatrix}
                I_{n-1} & \par{\Phi^i}{x_n} \\
                \par{\Phi^n}{x_i} & \par{\Phi^n}{x_n}
            \end{pmatrix}
            = \begin{pmatrix}
                I_{n-1} & 0 \\
                -\nabla\gamma & 1
            \end{pmatrix}
            $$

            and similarly for $D\Psi$, so $\det D\Phi = \det D\Psi = 1$.

        Consider $u'(y) = u(\Psi(y))$ and it's $C^1(B')$ extension $\overline u'(y)$ in a ball
        $B' \subset \Phi(B)$. Then, from step 2, we have

        $$\|\overline u'\|_{W^{1,p}(B')} \leq C \|u'\|_{W^{1,p}(B_+')}$$

        Consider further $\overline u(x) := \overline u'(\Phi(x))$. Then, $\overline u$ is
        is an extension in $U := \Psi(B')$, so

        $$\|\overline u\|_{W^{1,p}(U)} \leq C \|u\|_{W^{1,p}(\Omega)} \quad (*)$$

        **Step 4**: Covering

        As $\partial \Omega$ is compact, we can cover it with finitely many such $U_i$,
        each with a corresponding extension $\overline u_i$. Choose a $U_0 \Subset \Omega$
        such that

        $$\Omega \subset \bigcup_{i=0}^{N} U_i$$

        Next, let $\{\chi_i \in C_c^\infty(U_i)\}$ be a partition of unity and define

        $$\overline u := \sum_{i=0}^{N} \chi_i \overline u_i$$

        with $u_o \equiv u$ in $U_0$.
                
        $$\overset{(*)}{\implies} \|\overline u\|_{W^{1,p}(\R^n)} \leq C \|u\|_{W^{1,p}(\Omega)}$$

        Additionally, we may have $U_i \Subset V$ such that $\Supp(\overline u) \subset V$.
        The mapping $u \mapsto Eu = \overline u$ is linear by construction and

        $$\|Eu\|_{W^{1,p}(\R^n)} \leq C \|u\|_{W^{1,p}(\Omega)}$$

        $C^1(\overline \Omega)$ is dense in $W^{1,p}(\Omega)$ with respect to
        $\|\cdot\|_{W^{1,p}(\Omega)}$, $E$ can be extended to $W^{1,p}(\Omega)$.


??? remark "Remark 5.15"
    For a more regular boundary $\partial \Omega \in C^2$, the previous construciton
    gives $\overline u \in W^{2,p}(U)$ with

    $$\|\overline u\|_{W^{2,p}(B)} \leq C \|u\|_{W^{2,p}(B^+)}$$

    and following the same arguments, we get

    $$\|Eu\|_{W^{2,p}(\R^n)} \leq C \|u\|_{W^{2,p}(\Omega)}$$


??? theorem "Theorem 5.16"
    ## Trace theorem <a id="t516"></a>

    $\begin{align*}
        \text{Let } & \Omega \subset \R^n \text{ be bounded s.t.} \\
        & \partial \Omega \in C^1 \\
    \end{align*}$

    $$
    \begin{align*}
        \implies \exists\, T & \in L(W^{1,p}(\Omega), L^p(\partial \Omega)) \text{ s.t.} \\
        &(1) \quad T u = u|_{\partial \Omega}
        \quad \text{ if } u \in W^{1,p}(\Omega) \cap C(\overline \Omega) \\
        &(2) \quad \|T u\|_{L^p(\partial \Omega)} \leq C \|u\|_{W^{1,p}(\Omega)}
        \quad C = C(p, \Omega)
    \end{align*}
    $$
    
    $Tu$ is called the **trace** of $u$.

    ??? proof
        **Step 1**: Flat boundary

        Assume $u \in C^1(\overline \Omega)$, and take $x^0 \in \partial \Omega$. Further,
        assume $\partial \Omega$ is flat near $x^0$:

        $$\partial \Omega \cap B(x^0, r) = \{x \in B(x^0, r) : x_n = 0\}$$

        Defin $B= B(x^0, r)$ and $\hat B = B(x^0, r/2)$, and let $\xi\in C_c^\infty(B)$ be a cut-off from
        $\hat B$ to $B$. Lastly, let $\Gamma := \partial \Omega \cap \hat B$. By stoke's
        theorem $(S.T.)$ and yong's inequality $(Y.I.)$, we have

        $$
        \begin{align*}
            \implies \int_\Gamma |u|^p\, dx'
            &\le \int_{\{x_n=0\}} \xi |u|^p\, dx' \\
            &\overset{S.T.}{=} - \int_{B^+} (\xi |u|^p)_{x_n} \, dx \\
            &= \int_{B^+} \Big(|u|^p \xi_{x_n} + p |u|^{p-1} (\sgn u) u_{x_n} \xi\Big)\, dx \\
            &\overset{Y.I.}{\le} C \int_{B^+} |u|^p + |Du|^p\, dx
        \end{align*}
        $$

        **Step 2**: Flattening-out the boundary

        If $\partial \Omega$ is not flat near $x^0$, we flatten it locally as in the proof
        of [T.5.14](#t514). Then, for $\Gamma \subset \partial \Omega$ open with
        $x^0 \in \Gamma$, we obtain

        $$\int_\Gamma |u|^p\, d\s \leq C \int_{\Omega} |u|^p + |Du|^p\, dx$$ 
        
        **Step 3**: Covering

        As $\partial \Omega$ is compact, we can cover it with finitely many such $\Gamma_i$,

        $$\partial \Omega = \bigcup_{i=1}^{N} \Gamma_i$$

        and for all $i=1, \dots, N$, we have

        $$\|u\|_{L^p(\Gamma_i)} \leq C \|u\|_{W^{1,p}(\Omega)}$$

        Now, defining $Tu = u|_{\partial \Omega}$, we have

        $$\|Tu\|_{L^p(\partial \Omega)} \leq C \|u\|_{W^{1,p}(\Omega)}$$

        **Step 4**: Density

        We have shown that the theorem holds for $u \in C^1(\overline \Omega)$. Assume
        now that $u \in W^{1,p}(\Omega) \setminus C^1(\overline \Omega)$.

        $$
        \begin{align*}
            \implies \exists\, (&u_h)_h \subset C^\infty(\overline \Omega) \text{ s.t.} & \\
            \|&u_h - u\|_{W^{1,p}(\Omega)} \to 0
        \end{align*}
        $$

        Additionally, as we have shown,

        $$\|T u_h - T u_k\|_{L^p(\partial \Omega)} \leq C \|u_h - u_k\|_{W^{1,p}(\Omega)}$$

        so $(Tu_h)_h$ is a Cauchy sequence in $L^p(\partial \Omega)$. Then, we can define

        $$Tu := \lim_{h\to\infty} Tu_h$$

        in $L^p(\partial \Omega)$.


??? theorem "Theorem 5.17"
    ## Trace-zero functions in W¹𝄒ᵖ <a id="t517"></a>

    $\begin{align*}
        \text{Let } & \Omega \subset \R^n \text{ be open and bounded s.t.} \\
        & \partial \Omega \in C^1 \\
        & u \in W^{1,p}(\Omega)
    \end{align*}$

    $$u \in W_0^{1,p}(\Omega) \iff Tu = 0 \text{ on } \partial \Omega$$

    ??? proof
        === "$\implies$"
            $\begin{align*}
                & \text{Let } u \in W_0^{1,p}(\Omega) \\
                & \implies \exists\, (u_m)_m \subset C^\infty(\overline \Omega) : 
                u_m \to u \text{ in } W^{1,p}(\Omega) \\
                & Tu_m = 0 \text{ on } \partial \Omega
                \text{ and } T \text{ is continuous} \\
                & \implies 0 = \lim_{m\to\infty} Tu_m = Tu \text{ on } \partial \Omega
            \end{align*}$

        === "$\impliedby$"
            **Step 1**: Reduction to $\R_+^n$

            Assume $Tu = 0$ on $\partial \Omega$. By partition of unity and flattening of
            the boundary, we may reduce to the case

            $$
            \begin{cases}
                u \in W^{1,p}(\R_+^n) \text{ s.t.} \\
                u \text{ has compact support in } \R_+^n \\
                T u = 0 \text{ on } \partial\R_+^n = \R^{n-1}
            \end{cases}
            $$

            **Step 2**: Upper bound on $\|u(x', x_n)\|_{L^p(\R^{n-1})}$

            As $\R^{n-1} = \partial \R_+^n$ is $C^1$, we have that

            $$
            \begin{align*}
                \exists\, (&u_m)_m \subset C^1(\overline \R_+^n) \text{ s.t.} \\
                &u_m \to u \text{ in } W^{1,p}(\R_+^n) \\
            \end{align*}
            $$

            and thus, $u_m = T u_m \to 0$ in $L^p(\R^{n-1})\quad (*)$. Now, choose any
            $x' \in \R^{n-1}$ and $x_n \ge 0$. Then, we have

            $$|u_m(x', x_n)| \leq |u_m(x', 0)| + \int_0^{x_n} |\partial_{x_n} u_m(x', t)|\, dt.$$

            As $u \mapsto |u|^p$ is convex $(**)$, and integrating over $x'$, we have

            $$\int_{\R^{n-1}} |u_m(x', x_n)|^p\, dx
            \le C \left[\int_{\R^{n-1}} |u_m(x', 0)|^p\, dx'
            + \int_{\R^{n-1}} \left(\int_0^{x_n} |\partial_{x_n} u_m(x', t)|\, dt\right)^p\, dx'\right]$$

            Consider the first integrand in the second term. Using Jensen's inequality
            $(J.I.)$, we get

            $$
            \begin{align*}
                \left(\int_0^{x_n} |\partial_{x_n} u_m(x', t)|\, dt\right)^p
                &= \left(\frac{1}{x_n} \int_0^{x_n} |\partial_{x_n} u_m(x', t)|\, dt\right)^p x_n^p \\
                &\overset{J.I.}{\le}
                x_n^{p-1} \int_0^{x_n} |\partial_{x_n} u_m(x', t)|^p\, dt \\
                & \le x_n^{p-1} \int_0^\infty |Du_m(x', t)|^p\, dt
            \end{align*}
            $$

            Using this result and $(*)$, we have

            $$\int_{\R^{n-1}} |u(x', x_n)|^p\, dx
            \le C x_n^{p-1} \int_0^{x_n} \int_{\R^{n-1}} |Du_m(x', t)|^p\, dx' dt
            \quad \text{ a.e. } x_n > 0\quad (***)$$

            **Step 3**: $W^{1,p}(\R_+^n)$-sequence converging to $u$

            Next, let $\xi \in C_c^\infty(\R_+)$ be a cut-off from $[0, 1]$ to $[0, 2]$,
            and set
    
            $$
            \begin{align*}
                \xi_m(x) &:= \xi(m x_n), \quad x \in \R_+^n \\
                w_m(x) &:= u(x) \Big(1 - \xi_m(x)\Big)
            \end{align*}
            $$

            Then, their derivatives are

            $$
            \begin{align*}
                \partial_{x_n} w_m &= \partial_{x_n} u \cdot \Big(1 - \xi_m\Big) - m u \xi' \\
                D_{x'} w_m &= D_{x'} u \cdot \Big(1 - \xi_m\Big)
            \end{align*}
            $$

            and thus, by $(**)$, we have

            $$\int_{\R_+^n} |D w_m - Du|^p\, dx
            \le C \int_{\R_+^n} |\xi_m|^p |Du|^p\, dx
            + m^p \int_0^{2/m} \int_{\R^{n-1}} |u|^p\, dx'$$

            Denote by $A_m$ and $B_m$ the integrals on the right-hand side. $A_m$
            obviously converges to $0$. For $B_m$, using $(***)$, we have

            $$
            \begin{align*}
                B_m &\le C m^p \left(\int_0^{2/m} x_n^{p-1}\, dx_n\right)
                \left(\int_0^{2/m} \int_{\R^{n-1}} |Du_m|^p\, dx' dx_n\right) \\
                &\le C \int_0^{2/m} \int_{\R_+^n} |Du_m|^p\, dx' dx_n \to 0
            \end{align*}
            $$

            So $Dw_m \to Du$ in $L^p(\R_+^n)$. Trivially, $w_m \to u$ in $L^p(\R_+^n)$,
            so $w_m \to u$ in $W^{1,p}(\R_+^n)$.

            **Step 4**: Mollification of $w_m$
            
            Finally, as $w_m(x) = 0$ for $x_n \in (0, 1/m)$, we can mollify $w_m$ to obtain
            $u_m \in C_c^\infty(\R_+^n)$ such that $u_m \to u$ in $W^{1,p}(\R_+^n)$. Thus,
            $u \in W_0^{1,p}(\R_+^n)$.