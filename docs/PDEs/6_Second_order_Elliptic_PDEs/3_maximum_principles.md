# 6.3 Maximum Principles

<span style="display:none">
    $\newcommand{\tr}{\operatorname{tr}}$
</span>
For regular enough coefficients, we have seen that the divergence form of $L$ is equivalent
to the non-divergence form [R.6.1](../#r61). It will be convenient to work with the
non-divergence form:

$$Lu = - \sum_{i,j=1}^n a^{ij} u_{x_i x_j} + \sum_{i=1}^n b^i u_{x_i} + cu$$

with the additional assumption that $L$ is symmetric: $a^{ij} = a^{ji}$, and the coefficients
are continuous.


??? lemma "Lemma 6.13"
    For two positive semi-definite matrices $A, B \in \R^{n \times n}$, we have that

    $$\tr(AB) = \sum_{i,j=1}^n a^{ij} b^{ji} \ge 0$$

    ???+ proof
        These are invertible, so $\exists R \in O(n), D \in \R^{n\times n}$ diagonal with
        $d^i \ge 0$ such that $A = R^TDR$.

        $\begin{align*}
            & \implies C:= RBR^T \text{ is also positive semi-definite} \\
            & \implies c^{ii} \ge 0 \quad \forall i = 1, \dots, n \\
        \end{align*}$
        
        By the invariance of the trace under transposition and commutation, we have

        $$
        \begin{align*}
            \sum_{i,j=1}^n a^{ij} b^{ji} &= \tr(AB^T) = \tr(BA^T)=\tr(A^TB) = \tr(AB) \\
            &= \tr(R^TDRB) \\
            &= \tr(DRBR^T) \\
            &= \tr(DC) \\
            &= \sum_{i=1}^n d^i c^{ii} \ge 0 
        \end{align*}
        $$

???+ theorem "Theorem 6.14"
    ## Weak maximum principle <a id="t614"></a>

    Assume $u \in C^2(\Omega) \cap C(\overline{\Omega})$ and $c \ge 0$ in $\Omega$.

    $$
    \begin{align*}
        (1) & \quad Lu \le 0, c \equiv 0
        \implies \max_{\overline{\Omega}} u = \max_{\partial\Omega} u \\
        (2) & \quad Lu \le 0, c \ge 0
        \implies \max_{\overline{\Omega}} u \le \max_{\partial\Omega} u^+
    \end{align*}
    $$

    ???+ proof
        === "$(2)$"
            Let $\varepsilon > 0$ and choose $\lambda>0$ such that

            $$-\theta \lambda^2 + \|b_1\|_\infty \lambda + \|c\|_\infty < 0$$

            where $\theta$ is the ellipticity constant. Define
            $v^\varepsilon(x) := u(x) + \varepsilon e^{\lambda x_1}$. Then, we get

            ??? proof "Claim: $Lv^\varepsilon(x) < 0$"
                $$
                \begin{align*}
                    Lv^\varepsilon(x) &= Lu + \varepsilon e^{\lambda x_1}
                    \left(-\sum_{i,j=1}^n a^{ij} \delta_{1i}\delta_{1j} \lambda^2
                    + b^1 \lambda + c\right) \\
                    &\le \varepsilon e^{\lambda x_1}
                    \left(-\theta \lambda^2 + \|b_1\|_\infty \lambda + \|c\|_\infty\right) \\
                    & < 0
                \end{align*}
                $$

            Now, assume $\displaystyle \exists\, x_0 \in \Omega
            : 0 \le v^\varepsilon(x_0) = \max_{\overline{\Omega}} v^\varepsilon$.

            ??? proof "Claim: $Lv^\varepsilon(x_0) \ge c(x_0) v^\varepsilon(x_0)$"
                First, we have that $\nabla v^\varepsilon(x_0) = 0$, so
        
                $$\sum_{i=1}^n b^i(x_0) v^\varepsilon_{x_i}(x_0) = 0 \tag{i}$$
        
                Now, let $A:=(a^{ij}(x_0))_{ij}$ and $B:=-D^2v^\varepsilon(x_0)$. By uniform
                ellipticity, $A$ is positive definite. Further, as $x_0$ is a maximum, $B$ is
                positive semi-definite. By [Lemma 6.13](#l613), we have
        
                $$\tr(AB^T) = \sum_{i,j=1}^n a^{ij}(x_0) b^{ij}(x_0) \ge 0 \tag{ii}$$
        
                Now, uing $(i)+(ii)$, we get
        
                $$Lv^\varepsilon(x_0) \ge c(x_0) v^\varepsilon(x_0)$$

            Now, we have two cases:

            **Case 1:** $v^\varepsilon(x_0) < 0$:

            $$\max_{\overline{\Omega}} u \le v^\varepsilon(x_0) < 0 \le \max_{\partial\Omega} u^+$$

            **Case 2:** $v^\varepsilon(x_0) \ge 0$:

            Then, we have a contradiction, so this $x_0$ does not exists. The maximum lies on
            the boundary:

            $$\max_{\overline{\Omega}} u \le \max_{\overline{\Omega}} v^\varepsilon =
            \max_{\partial\Omega} v^\varepsilon \le \max_{\partial\Omega} (v^\varepsilon)^+$$

            Now, $v^\varepsilon \to u$ uniformly as $\varepsilon \to 0$, so we get

            $$\max_{\overline{\Omega}} u \le \max_{\partial\Omega} u^+$$

        === "$(1)$"
            Follows from $(2)$ by taking $c \equiv 0$.


???+ lemma "Lemma 6.15"
    ## Hopf lemma <a id="l615"></a>

    $\begin{align*}
        \text{Assume } & c \ge 0 \text{ in } \Omega \\
        & u \in C^2(\Omega) \cap C(\overline{\Omega}) : Lu \le 0 \\
        & x_0 \in \partial \Omega : u(x_0) > u(x) \quad \forall\, x \in \Omega
    \end{align*}$

    If there is a ball $B \subset \Omega : x_0 \in \partial B$, we have that

    $$u(x_0) \ge 0 \implies \par{u}{\nu_{x_0}}(x_0) > 0$$

    where $\nu_{x_0}$ is the unitary outer normal of $B$ at $x_0$.

    In the case $c \equiv 0$, we have $\par{u}{\nu_{x_0}}(x_0) > 0$, without assuming
    $u(x_0) \ge 0$.

    ??? proof
        Without loss of generality, we can assume $B = B(0, r)$ for some $r >0$.

        Let $v(x) := e^{-\lambda |x|^2} - e^{-\lambda r^2}$ in $B$ and consider the region

        $$R := B(0, r) \setminus \overline{B(0, r/2)}$$

        ??? proof "Claim: For $\lambda$ big enough, $Lv \le 0$ in $R$"
            The derivatives are

            $$
            \begin{align*}
                \partial_{x_i} v(x) &= -2\lambda x_i e^{-\lambda |x|^2} \\
                \partial_{x_i x_j} v(x) &=
                4\lambda^2 x_i x_j e^{-\lambda |x|^2} - 2\lambda \delta_{ij} e^{-\lambda |x|^2}
            \end{align*}
            $$

            so we get

            $$
            \begin{align*}
                Lv &= -\sum_{i,j=1}^n a^{ij} v_{x_i x_j} + \sum_{i=1}^n b^i v_{x_i} + cv \\
                &= e^{-\lambda |x|^2} \left(-\sum_{i,j=1}^n a^{ij} (4\lambda^2 x_i x_j - 2\lambda \delta_{ij})
                - \sum_{i=1}^n 2\lambda b^i x_i\right)
                + c (e^{-\lambda |x|^2} - e^{-\lambda r^2}) \\
                &\le e^{-\lambda |x|^2} \Big(-4 \theta |x|^2 \lambda^2 + 2\lambda |\tr A|
                + 2\lambda |b| |x| + |c|\Big)
            \end{align*}
            $$

            Now, taking the supremum over $R$, we get

            $$Lv \le e^{-\lambda |x|^2}
            \left(-4 \theta \left(\frac{r}{2}\right)^2 \lambda^2
            + 2\lambda \|\tr A\|_{L^\infty(R)}
            + 2\lambda \|b\|_{L^\infty(R)} r + \|c\|_{L^\infty(R)}\right)$$

            So we can choose $\lambda$ big enough such that $Lv \le 0$ in $R$.

        ??? proof "Claim: $u(x_0) \ge u(x) + \varepsilon v(x) \quad \forall\, x \in R$"

            By the assumption $u(x_0) > u(x) \quad \forall\, x \in \Omega$ and the previous
            claim, we have
    
            $$\exists\, \varepsilon > 0 : u(x_o) \ge u(x) + \varepsilon v(x)
            \quad \forall\, x \in \partial B(r/2, 0) \tag{1}$$
    
            Since we also have $v|_{\partial B(0,r)} = 0$, we get
    
            $$u(x_o) \ge u(x) + \varepsilon v(x) \quad \forall\, x \in \partial B(r, 0) \tag{2}$$
    
            Additionally, by the assumptions $c, u(x_0) \ge 0$, we have
    
            $$
            \begin{align*}
                L(u + \varepsilon v - u(x_o)) &= Lu + \varepsilon Lv - Lu(x_o) \\
                &\le - cu(x_o) \\
                &\le 0
            \end{align*}
            $$
    
            So by [WMP](t614) and $(1)+(2)$, we get
    
            $$\max_{\overline R} (u + \varepsilon v - u(x_0))
            \le \max_{\partial R} (u + \varepsilon v - u(x_0))^+ = 0$$
    
            In other words,
    
            $$u(x_0) \ge u(x) + \varepsilon v(x) \quad \forall\, x \in R$$

        For $x = x_0$, we have $v(x) = 0$ and 

        $$\Big(u(x) + \varepsilon v(x) - u(x_0)\Big)\Big|_{x=x_0}
        \ge u(x) + \varepsilon v(x) - u(x_0) \quad \forall\, x \in R$$

        In particular,

        $$
        \begin{align*}
            \partial_\nu(u + \varepsilon v - u(x_o))|_{x=x_0} \ge 0
            & \iff \par{u}{\nu_{x_0}}(x_0) + \varepsilon \par{v}{\nu_{x_0}}(x_0) \ge 0 \\
            & \iff \par{u}{\nu_{x_0}}(x_0)
            \ge - \varepsilon \left(\nabla \cdot \frac{x_0}{r}\right)
            = 2 \varepsilon \lambda r e^{-\lambda^2 r} > 0
        \end{align*}
        $$



???+ theorem "Theorem 6.15"
    ## Strong maximum principle <a id="t615"></a>

    Let $c \ge 0$ in $\Omega \subseteq \R^n$ open and connected. Assume
    $u\in C^2(\Omega) \cap C(\overline{\Omega}) : Lu \le 0$. Then,

    $$\exists\,x_0 \in \Omega : u(x_0) = \max_{\overline{\Omega}} u \ge 0
    \implies u \text{ is constant}$$

    In the case $c \equiv 0$:

    $$\exists\,x_0 \in \Omega : u(x_0) = \max_{\overline{\Omega}} u
    \implies u \text{ is constant}$$

    ???+ proof
        $\begin{align*}
            \text{Let } & m:= \max_{\overline{\Omega}} u \\
            & M := \{x \in \Omega : u(x) = m\}
        \end{align*}$

        Assume $u \not\equiv m$, and consider

        $$
        \begin{align*}
            &N := \{x \in \Omega : u(x) < m\} \\
            &y \in  N : \dist(y, M) < \dist(y, \partial \Omega)
        \end{align*}
        $$

        Such a $y$ exists as $N \neq \emptyset$ and $\Omega$ is open and connected.
        Additionally, $N$ is open, so there is a largest ball $B := B(r,y) \subseteq N$.

        Then, there is an $x_0 \in M \cap \partial B$, and $N$ satisfies the interior ball
        condition.

        $\begin{align*}
            \implieshref{#l615}{H.L.} & \par{u}{\nu_{x_0}}(x_0) > 0 \\
            \implies & u \text{ is not maximal at } x_0 \quad \contradiction \\
            \implies & u \cong m
        \end{align*}$