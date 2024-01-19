# 5 Open mapping theorem

??? theorem "Theorem 5.1"
    
    Let $X$ and $Y$ be banach spaces, and $T$ be a linear, continuous and bijective.
    
    $$ \implies T^{-1} \text{ is continuous}$$
    
    ??? proof
        coming


??? definition "Definition: 5.1"

    ## Nowhere dense <a id="d51"></a>
    
    The set $A$ is called nowhere dense if $\overline A$ does not contain an open set.

    **Terminology:** A metric space $X$ is called

    - of first category if it is a countable union of nowhere dense sets
    - of second category otherwise.


??? lemma "Lemma 5.1"

    ## Bair Category Theorem (BCT) <a id="bct"></a>

    A complete metric space is of [second category](#d51).
    
    ??? proof
        
        Assume the complete metric space $X$ is of first category:

        $$ X = \bigcup_{n=1}^{\infty} A_n, \tab A_n \text{ is nowhere dense}$$
        
        The idea is to construct an element $x$ which is not in this union:

        Let $M_n:=\overline A_n$ be closed, nowhere dense. Then,
        $\begin{align*}X = \bigcup_{n=1}^{\infty} M_n\end{align*}$

        ??? proof "Claim: $X\backslash M_1$ is open and dense"

            Assume it is not dense. Then, there exists $x \in X$ s.t.

            $$ \operatorname{dist}\big(x, X\backslash M_1\big) > 0$$

            Them, we get

            $$
            \begin{align*}
                \implies \exists\ \varepsilon > 0 : & B_\varepsilon(x) \cap X \backslash M_1 = \emptyset \\
                \implies & B_\varepsilon(x) \subseteq M_1 \contradiction
            \end{align*}
            $$

            which is a contradiction, as $M_1$ is nowhere dense.

        === "Step 1"
            Since $X\backslash M_1$ is nonempty and open, there exists a closed ball
            $S_1 \subseteq X \backslash M_1$

            $$S_1:=\overline{B_{r_1}(x_1)}, \tab r_1 \le \frac{1}{2}$$

        === "Step 2"
            Since $X\backslash (M_1 \cup M_2)$ is nonempty and open, there exists a closed ball
            $S_2 \subseteq X \backslash (M_1 \cup M_2)$

            $$S_1:=B_{r_2}(x_2), \tab r_2 \le \frac{1}{2^2}$$

        === "Step n"
            Since $\begin{align*}X\backslash \bigcup_{i=1}^{n} M_i \end{align*}$ is nonempty and open,
            there exists a closed ball
            $\begin{align*}S_n \subseteq X\backslash \bigcup_{i=1}^{n} M_i \end{align*}$

            $$S_n:=B_{r_n}(x_n), \tab r_n \le \frac{1}{2^n}$$

        ---

        This creates a cauchy sequence $\{x_n\}$ which must converge to an element $x \in X$.

        ??? proof "Claim: $x \in S_n \tab \forall\ n$."

            It is certainly true that

            $$x_m \in S_n \tab \forall\ m \ge n$$

            As $S_n$ is closed, it must hold for $x$ as well.

        Hence, $x \not\in M_n \tab\forall n \contradiction$  

        Thus, $X$ must be of second category.


??? theorem "Theorem 5.2"

    ## Open mapping theorem <a id="t52"></a>

    Let $T : X \to Y$ be a linear, continuous, surjective mapping between banach spaces.

    $$ \implies T \text{ is open.}$$
    
    ??? proof
        Fix any $\varepsilon > 0$.

        ??? proof "Claim: $\overline{T(B_\varepsilon(0))}$ contains an open subset."
            We have that

            $$X = \bigcup_{n = 1}^{\infty} B_{n \varepsilon}(0)$$

            As $T$ is surjective, we get

            $$
            \begin{align*}
                \implies & Y = T(X) = \bigcup_{n\in\N} T(B_{n \varepsilon}(0)) \\
                \implieshref{#BCT}{BCT}
                & \text{ not all } T(B_{n \varepsilon}(0)) \text{ are nowhere dense} \\
                \iff &\exists\ \tilde V_0 \subseteq \overline{T(B_{n \varepsilon}(0))}
                : V_0 \text{ is open} \\
                \implies & \overline{T(B_{\varepsilon}(0))}
                = \frac{1}{n} \overline{T(B_{n \varepsilon}(0))}
                \supseteq \frac{1}{n} \tilde V_0 =: V_0
            \end{align*}
            $$

            $V_0$ is open.

        ??? proof "Claim: $\overline{T(B_\varepsilon(0))}$ contains a ball around $0$."
            $\begin{align*}
                \text{Let } & y_o \in V_0 \cap T(B_{\varepsilon}(0)) \\
                & x_0 \in B_{ \varepsilon}(0) \text{ s.t. } T(x_0) = y_0
            \end{align*}$ 

            As $B_{2 \varepsilon}(0) \supseteq B_\varepsilon(0) -x_0 \ (*)$ and $V_0$ is open $(**)$,
            we get
    
            $$
            \begin{align*}
                \overline{T(B_{2 \varepsilon}(0))}
                & \overset{(*)}{\supseteq}
                \overline{T(B_\varepsilon(0)-x_0)} \\
                &= \overline{T(B_\varepsilon(0))} - T(x_o) \\
                & \supseteq V_0-y_0 \\
                & \overset{(**)}{\supseteq}
                B_\delta(y_0) - y_0 \\
                &= B_\delta(0)
            \end{align*}
            $$

            for some $\delta > 0$.

        ??? proof "Claim: $T(B_{2\varepsilon}(0))$ contains a ball around $0$."

            $\begin{align*}
                \text{Let } & B_{2 \varepsilon} \text{ be a ball around } 0 \\
                & \varepsilon_i = 2^{-i} \varepsilon_0 
            \end{align*}$

            Then, $\forall \varepsilon_i \exists\ \delta_i > 0$ such that

            $$\overline{T(B_{\varepsilon_i)}} \supseteq B_{\delta_i}'$$

            Let $y \in B_{\delta_0}$

            ??? proof "Claim: $\exists\ x \in B_{2 \varepsilon} : Tx = y$."
                $$
                \begin{align*}
                    &y \in \overline{T(B_{ \varepsilon_0})} \\
                    & \implies \exists\ x_0\in B_{\varepsilon_0} : \|y-Tx_0\| < \delta_1 \\
                    6 \implies y-Tx_0\in B_{\delta_1}'
                \end{align*}
                $$

                By the same argument,

                $$\exists\ x_1\in B_{\varepsilon_1} : \|y-T(x_0-x_1)\| < \delta_2$$

                Moreover, we get

                $$\exists\ x_n\in B_{\varepsilon_n} : \|y-T\tilde x_n\| < \delta_{n+1} \to 0$$

                with $\begin{align*}\tilde x_n = \sum_{i=0}^{n} x_i\end{align*}$$

                This forms a cauchy sequence as

                $$\|\tilde x_n - \tilde x_m\| = \left\|\sum_{i=n+1}^{m} x_i\right\| < \varepsilon_0 2^{-m} \to 0$$

                This sequence has a limit $x\in X$, as $X$ is banach. As $T$ is continuous, we have that

                $$T \tilde x_n \to Tx=y$$

            This yields

            $$
            \begin{align*}
                \|x\| &= \left\|\sum_{i=0}^{\infty} x_i\right\| \\
                &\le \sum_{i=0}^{\infty} \|x_i\| \\
                &< \sum_{i=0}^{\infty} 2^{-1} \varepsilon_o \\
                &=2 \varepsilon_0 \\
                \implies & x \in B_{2 \varepsilon_0}
            \end{align*}
            $$

        $\begin{align*}
            \text{Let } & \Omega \subseteq X \text{ be an open set} \\
            & x \in \omega \\
            & y = T(X)
        \end{align*}$

        $$
        \begin{align*}
            \implies T(\Omega) &\supseteq T(B_\varepsilon(x)) \\
            &= T(B_\varepsilon(0) + x) \\
            &= T(B_\varepsilon(0)) + Tx \\
            & \supseteq B_\delta'(0) + Tx \\
            & \supseteq B_\delta'(Tx) \\
            & \supseteq B_\delta'(y) \\
        \end{align*}
        $$

        So for all $y\in\Omega$ there exists an open ball $B_\delta'/y) \subseteq T(\Omega)$.
        Thus, $T(\Omega)$ is open.


??? definition "Definition: 5.2"
    $\begin{align*}
        \text{Let } & X, Y \text{ be normed spaces} \\
        & I \text{ be an index set} \\
        & \{T_i\}_{i\in I} \text{ be a family of operators in } L(X, Y)
    \end{align*}$

    === "Point wise bounded"
        $$\sup_{i\in I} \|T_i(x)\|_Y < \infty$$

    === "Uniformly bounded"
        $$\sup_{i\in I} \|T_i\|_{L(X,Y)} < \infty$$


??? theorem "Theorem 5.3"

    ##Principle of uniform boundedness

    $\begin{align*}
        \text{Let } & X \text{ be a banach space} \\
        & Y \text{ be a normed space} \\
        & I \text{ be an index set} \\
        & \{T_i\}_{i\in I} \subseteq L(X, Y)
    \end{align*}$

    $$T_i \text{ is pointwise bounded } \iff T_i \text{ is uniformly bounded}$$
    
    ??? proof
        
        Using [BCT](#bct), the proof is similar to that of [OMP](#t52).


??? definition "Definition 5.3"

    ## Closed Operator
    
    $\begin{align*}
        \text{Let } & X, Y \text{ be normed spaces} \\
        & A \in L(X, Y)
    \end{align*}$

    $A$ is called **closed** if the graph of $A$

    $$\graph A := \{(x, y) \in X\times Y : y=Ax\}$$

    is closed. Alternativesly if

    $$
    \begin{rcases}
        x_i &\to x \\
        A x_i &\to Ax
    \end{rcases} \implies Ax = y
    $$


??? theorem "Theorem 5.4"

    $\begin{align*}
        \text{Let } & X, Y \text{ be Banach spaces} \\
        & A \in L(X, Y)
    \end{align*}$

    $$A \text{ is closed } \iff A \text{ is continuous}$$
    
    ??? proof
        
        Using [OMT](#omt).


??? example "Example 5.1"

    $\begin{align*}
        \text{Let } & X=C^\infty[0, 1] \\
        & A=\frac{\mathrm d}{\mathrm d x}
    \end{align*}$

    - $A$ is not continuous for any norm
    - $A$ is closed using the supnorm $\|\cdot\|_\infty$



        