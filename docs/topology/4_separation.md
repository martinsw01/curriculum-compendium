# 4 Separation

## Separating neighborhoods

??? definition "Definition 4.1"
    ### Separation axioms

    $$
    \begin{align*}
        T_0 \quad & \forall\, x\neq y \in X\ \exists\, U \in \O :
        \begin{cases}
            x \in U, y \notin U \text{ or} \\
            x \notin U, y \in U \\
        \end{cases} \\ \\
        T_1 \quad & \forall\, x\neq y \in X\ \exists\, U, V \in \O :
        \begin{cases}
            x \in U, y \notin U \text{ and} \\
            x \notin V, y \in V \\
        \end{cases} \\ \\
        T_2 \quad & \forall\, x\neq y \in X\ \exists\, U, V \in \O :
        \begin{cases}
            x \in U, y \in V \\
            U \cap V = \emptyset \\
        \end{cases} \\ \\
        T_3 \quad & \forall\, x \in X\ \exists\, C \subseteq X \text{ closed}, x \notin C \\
        & \exists\, U, V \in \O : \\
        & \begin{cases}
            x \in U \\
            C \subseteq V \\
            U \cap V = \emptyset \\
        \end{cases} \\ \\
        T_4 \quad & \forall\, C, D \subseteq X \text{ closed and disjoint} \\
        & \exists\, U, V \in \O : \\
        & \begin{cases}
            C \subseteq U \\
            D \subseteq V \\
            U \cap V = \emptyset \\
        \end{cases} \\
    \end{align*}
    $$

??? definition "Definition 4.2"
    ### Hausdorff, regular, normal space

    A topological space $X$ wich is

    - $T_2$ is called a **Hausdorff space**.
    - both $T_3$ and $T_1$ is called a **regular space**.
    - both $T_4$ and $T_1$ is called a **normal space**.

??? remark "Remark 4.3"
    We have the following implications:

    $$
    \begin{matrix}
        \text{Normal} & \Rightarrow & \text{Regular} & \Rightarrow & \text{Hausdorff} & & & & & & \\
        \Downarrow & & \Downarrow & & \Updownarrow & & & & & & \\
        T_4 & & T_3 & & T_2 & \implies & T_1 & \implies & T_0 
    \end{matrix}
    $$

    but note that $T_4 \centernot\implies T_3$ and $T_3 \centernot\implies T_2$.


??? proposition "Proposition 4.4"
    ### T<sub>1</sub> equivalences <a id="p44"></a>

    The following are equivalent:

    $$
    \begin{align*}
        (1) & \quad X \text{ is } T_1 \\ \\
        (2) & \quad \{x\} \subseteq X \text{ is closed } \forall\, x \in X \\ \\
        (3) & \quad \text{Every subset } A \subseteq X \text{ is the intersection of all its open neighborhoods}
    \end{align*}
    $$

    ??? proof
        === "$(1) \implies (2)$"
            $\begin{align*}
                \text{Let } & X \text{ be } T_1 \\
                & x \in X
            \end{align*}$

            $\begin{align*}
                & \implies \forall\, x \neq y \in X\ \exists\, U_y \in \Neigh_y : x \notin U_y \\
                & \implies \bigcup_{y\neq x} U_y = X \setminus \{x\} \text{ is open} \\
                & \implies \{x\} \text{ is closed}
            \end{align*}$

        === "$(2) \implies (3)$"
            $\begin{align*}
                \text{Let } & A \subseteq X \\
                & x \in X
            \end{align*}$

            $\begin{align*}
                \overset{(2)}{\implies} & X \setminus \{x\} \text{ is an open neighborhood of } A \ \forall\, x \in X \setminus A \\
                \implies & A \subseteq \bigcap_{U \supseteq A \text{ open}} U
                \subseteq \bigcap_{x \in X\setminus A} (X \setminus \{x\})
                = X \setminus \bigcup_{x\in X\setminus A} \{x\} = A \\
                \implies & A = \bigcap_{U \supseteq A \text{ open}} U                
            \end{align*}$

        === "$(3) \implies (1)$"
            Let $A = \{x\}$.

            $\begin{align*}
                \overset{(3)}{\implies} & \{x\} = \bigcap_{U \in \Neigh_x} U \\
                \implies & \forall\, y \in X\ \exists\, U \in \Neigh_x : y \notin U \\
                \implies & X \text{ is } T_1
            \end{align*}$

??? proposition "Proposition 4.5"
    ### T<sub>2</sub> equivalence <a id="p45"></a>

    $$X \text{ is } T_2 \iff \{x\} = \bigcap_{\substack{C \in \Neigh_x \\ \text{closed}}} C \quad \forall\, x\in X$$

    ??? proof
        === "$\implies$"
            Let $x \in X$.

            $\begin{align*}
                \overset{T_2}{\implies} & \forall\, x\neq y\in X\
                \exists\, U_x \in \Neigh_x, U_y \in \Neigh_y \text{ open } : U_x \cap U_y = \emptyset \\
                \implies & (X \setminus U_y) \supseteq U_x \text{ is a closed neighborhood of } x
                \text{ not containing } y \\
                \implies & \{x\} = \bigcap_{y \neq x} (X \setminus U_y)
            \end{align*}$

        === "$\impliedby$"
            We have that
            $\displaystyle{\{x\} = \bigcap_{\substack{C \in \Neigh_x \\ \text{closed}}} C}$.
            Let $x \neq y \in X$.

            $\begin{align*}
                & \implies \exists\, C \in \Neigh_x \text{ closed } : y \notin C \\
                & \implies
                \begin{cases}
                    U_x:= C^\circ \in \Neigh_x \\
                    U_y:= X \setminus C \in \Neigh_y
                \end{cases} \text{ are disjoint open neighborhoods of } x, y \\
                & \implies X \text{ is } T_2
            \end{align*}$
            

??? proposition "Proposition 4.6"
    ### T<sub>3</sub> equivalence <a id="p46"></a>

    $$X \text{ is } T_3 \iff \{C \in \Neigh_x : C \text{ closed}\}
    \text{ form a neighborhood basis of } x \quad \forall\, x\in X$$

    ??? proof
        === "$\implies$"
            Let $W \in \Neigh_x$ be open.

            $\begin{align*}
                \implies & X \setminus W \text{ is closed} \\
                \overset{T_3}{\implies} & \exists\, U, V \in \O \text{ disjoint } :
                x \in U, X \setminus W \subseteq V \\
            \end{align*}$

            We need to show that $X \setminus V$ is a closed neighborhood of $x$ in $W$. As
            $U, V$ are disjoint, we have that $X \setminus V \supseteq U$, so it is a
            closed neighbourhood. Moreover, $X \setminus V \subseteq W$.

        === "$\impliedby$"
            Let $C \subseteq X$ be closed such that $x \notin C$.

            $\begin{align*}
                & \implies X \setminus C \in \Neigh_x \text{ open} \\
                & \implies \exists\, W \in \Neigh_x \text{ closed } : W \subseteq X \setminus C \\
            \end{align*}$

            $\begin{align*}
                \text{Let } & U = W^\circ \\
                & V = X \setminus W
            \end{align*}$

            $\implies
            \begin{cases}
                U, V \text{ are disjoint open s.t. } \\
                x \in U, C \subseteq V
            \end{cases}$

            So $X$ is $T_3$.


??? proposition "Proposition 4.7"
    ### T<sub>4</sub> equivalences <a id="p47"></a>

    The following are equivalent:

    $$
    \begin{align*}
        (1) \quad & X \text{ is } T_4 \\ \\
        (2) \quad & \forall\, C \in \O, C \subseteq U \text{ closed} \\
        & \exists\, V \in \O : C \subseteq V \subseteq \overline V \subseteq U \\ \\
        (3) \quad & \forall\, C \subseteq X \text{ closed} :
        \text{ the closed neighborhoods of } C \text{ form a neighborhood basis}
    \end{align*}
    $$

    ??? proof
        Similar to the proofs above.

## Separation by functions

??? definition "Definition 4.8"
    ### Urysohn function

    Let $A, B \subseteq X$ be disjoint closed sets. A continuous function

    $$f : X \to [0, 1]$$

    with

    $$
    \begin{align*}
        f(A) & = \{0\} \\
        f(B) & = \{1\}
    \end{align*}
    $$

    is called an **Urysohn function**.


??? theorem "Theorem 4.9"
    ### Urysohn's lemma <a id="t49"></a>

    $$X \text{ is } T_4 \iff \text{For all } A, B \subseteq X \text{ closed and disjoint,
    there exists a Urysohn function}$$

    ??? proof
        === "$\impliedby$"
            $\begin{align*}
                \text{Let } & f \text{ be an Urysohn function for } \\
                & A, B \subseteq X \text{ closed and disjoint} \\
                & 0 < a \le b < 1
            \end{align*}$

            Then, $U:=f^{-1}[0, a)$ and $V:=f^{-1}(b, 1]$ are

            - open,
            - disjoint,
            - and satisfies $A \subseteq U, B \subseteq V$.

            So $X$ is $T_4$.

        === "$\implies$"
            Let $A, B \subseteq X$ be closed and disjoint.

            $\begin{align*}
                \overset{T_4}{\implies} & \exists\, L_{1/2} \in \O :
                A \subseteq L_{1/2} \subseteq \overline L_{1/2} \subseteq X \setminus B \\
                \overset{T_4}{\implies} & \exists\, L_{1/4}, L_{3/4} \in \O :
                A \subseteq L_{1/4} \subseteq \overline L_{1/4} \subseteq L_{1/2}
                \subseteq \overline L_{1/2} \subseteq L_{3/4} \subseteq \overline L_{3/4}
                \subseteq X \setminus B \\
                & \vdots \\
                \overset{T_4}{\implies} & \text{ Repeat inductively obtaining } L_r
                \text{ for } r \in D = \left\{\frac{m}{2^n} \mid n \in \N, m \le 2^n\right\} \\
            \end{align*}$

            Note that $\overline D = [0, 1]$ and that $\overline L_q \subseteq L_r$ for
            $q < r$. Define the function

            $$
            \begin{align*}
                f : X &\to [0, 1] \\
                x &\mapsto
                \begin{cases}
                    \inf\{q \in D : x \in L_q\},& x \in X \setminus B \\
                    1, & x \in B
                \end{cases}
            \end{align*}
            $$

            Then, we can easily see that
    
            $$
            \begin{cases}
                f(A) = \{0\} \\
                f(B) = \{1\}
            \end{cases}
            $$

            Then, it remains to show continuity. Let $y\in X, t \in D$. Note that

            $$
            \begin{cases}
                f(y) < t \implies y \in L_t \\
                f(y) > t \implies y \notin \overline L_t,
            \end{cases}
            $$

            so $f^{-1}[0, t) \subseteq L_t \subseteq \overline L_t \subseteq f^{-1}[0, t]$.

            $\begin{align*}
                \text{Let } & x \in X \\
                & U \in \Neigh_{f(x)}
            \end{align*}$

            $\begin{align*}
                & \implies \exists\, r, s \in D : f(x) \in (r, s), [r, s] \subseteq U \\
                & \implies L_s \setminus \overline L_r \subseteq
                f^{-1}[0,s] \setminus f^{-1}[0, r) = f^{-1}[r, s]
            \end{align*}$

            So $L_s \setminus \overline L_r$ is an open neighborhood of $f(x)$ mapped into
            $[r, s]$. Thus, $f$ is continuous.


## Extending functions

??? theorem "Theorem 4.10"
    ### Tietze's extension theorem <a id="t410"></a>

    Let $X$ be a $T_4$ space.

    $$\implies \forall\, A \subseteq X \text{ closed}, f : A \to [-1, 1] \text{ continuous }
    \exists\, F : X \to [-1, 1] \text{ continuous } : F|_A = f$$

    ??? proof
        Consider the $\varepsilon$-extension $g : X \to [-1 + \varepsilon, 1 - \varepsilon]$
        of $f$ such that

        $$|f(a) - g(a)| \le \varepsilon \quad \forall\, a \in A$$

        $\begin{align*}
            \text{Let } & C = (f-g)^{-1}\left[-\varepsilon, -\frac{1}{3} \varepsilon\right] \\
            & D = (f-g)^{-1}[\frac{1}{3} \varepsilon, \varepsilon]
        \end{align*}$

        By continuity of $f$, $C, D$ are closed.

        $\begin{align*}
            \implieshref{#t49}{T.4.9} &
            \exists\, \nu : X \to \left[-\frac{1}{3} \varepsilon, \frac{1}{3} \varepsilon\right]
            \text{ continuous } :
            \begin{cases}
                \nu(C) = \left\{-\frac{1}{3} \varepsilon\right\} \\
                \nu(D) = \left\{\frac{1}{3} \varepsilon\right\}
            \end{cases}
            \implies & \tilde g := g + \nu \text{ is a } \frac{2}{3} \varepsilon\text{-extension of } f
        \end{align*}$

        Proceed inductively with $g_0 \equiv 0, g_n+1 := \tilde g_n$. Then we have the error
        $\varepsilon_n = \left(\frac{2}{3}\right)^n \varepsilon$. We then have

        $$\|g_{n+1} - g_n\|_\infty = \|\nu_n\|\infty \le \frac{1}{3} \left(\frac{2}{3}\right)^n \varepsilon$$

        so $g_n$ is a uniformly Cauchy sequance. Then, by [L.4.11](#l411), $g_n$ converges
        uniformly to a continuous function $F$ with $F|_A = f$.

        
??? lemma "Lemma 4.11"
    <a id="l411"></a>

    Let $(f_n)_{n\in\N}$ be a sequence of continuous functions $f_n : X \to \R$ converging
    uniformly to $f : X \to \R$. Then $f$ is continuous.

    ??? proof
        Known result from analysis.


??? corollary "Corollary 4.12"
    <a id="c412"></a>
    $\begin{align*}
        \text{Let } & X \text{ be a } T_4 \text{ space} \\
        & A \subseteq X \text{ be closed}
    \end{align*}$

    $$\implies \forall\, f : A \to \R^n \text{ continuous }
    \exists\, F : X \to \R^n \text{ continuous } : F|_A = f$$

    ??? proof
        Apply [T.4.10](#t410) component-wise:

        $\begin{align*}
            \text{Let } & \rho : \R \to (-1, 1) \text{ be a homeomorphism} \\
            & \phi_i := \rho \circ f_i : A \to (-1, 1) \\
            & \Phi_i : X \to [-1, 1] \text{ be a Tietsze extension of } \phi_i
        \end{align*}$

        $\begin{align*}
            \implieshref{#t49}{T.4.9} & \exists\, u_i : X \to [0, 1] \text{ Urysohn function s.t.} \\
            &
            \begin{cases}
                u_i\left(\Phi_i^{-1}\{\pm 1\}\right) = \{0\} \\
                u_i(A) = \{1\}
            \end{cases} \\
            \implies &
            \begin{cases}
                u_i \circ \Phi_i : X \to (-1, 1) \\
                u_i \circ \Phi_i |_A = f_i
            \end{cases} \\
            \implies & F_i = \rho^{-1} \circ u_i \circ \Phi_i : X \to \R
            \text{ is the desired extension of } f_i
        \end{align*}$


## Metrization

??? proposition "Proposition 4.13"
    <a id="p413"></a>
    Every metric space $(X, d)$ is normal. 

    ??? proof
        === "$T_4$"
            Let $A, B \subseteq X$ be closed and disjoint. The distance function to $A$
    
            $$
            \begin{align*}
                d_A : X &\to [0, \infty) \\
                x &\mapsto d(A, x) = \inf_{a \in A} d(a, x)
            \end{align*}
            $$
    
            is $1$-Lipschitz:
    
            $$|d_A(x) - d_A(y)| \le d(x, y)$$
    
            Define the function
    
            $$
            \begin{align*}
                f : X \to [0, 1] \\
                x &\mapsto \frac{d_A(x)}{d_A(x) + d_B(x)}
            \end{align*}
            $$
    
            $\begin{align*}
                & A \cap B = \emptyset \\
                & \implies d_A(x) + d_B(x) > 0 \\
                & \implies f \text{ is well-defined and continuous} \\
                & \implies
                \begin{cases}
                    f(A) = \{0\} \\
                    f(B) = \{1\}
                \end{cases} \\
                & \implies f \text{ is a Urysohn function} \\
                & \implieshref{#t49}{T.4.9} X \text{ is } T_4
            \end{align*}$

        === "$T_1$"
            For $x \neq y, \delta := d(x, y) > 0$, we have

            $$
            \begin{align*}
                & x \notin B_\delta(y) \in \Neigh_y \\
                & y \notin B_\delta(x) \in \Neigh_x \\
            \end{align*}
            $$
    
            so $X$ is $T_1$.


??? definition "Definition 4.14"
    A topological space $X$ is **metrizable** if there exists a metric that induces the
    topology on $X$.


??? theorem "Theorem 4.15"
    ### Urysohn's metrization theorem <a id="t415"></a>

    Every second countable regular space is metrizable.

    ??? proof
        By [T.4.21](#4.21), $X$ is normal, so by [L.4.16](#l416), there exists a countable family of continuous functions
        $(f_\alpha : X \to [0, 1])_{\alpha \in A}$ that separates points from closed sets.
        Thus, $F := (f_\alpha)_{\alpha \in A} : X \to [0, 1]^A$ separates points from
        closed sets in $[0, 1]^A$. Further, by [L.4.17](#l417), $F$ is an embedding. Hence,

        $$X \cong F(X) \subseteq [0, 1]^A.$$

        By [L.4.18](#l418), $[0, 1]^A$ is metrizable, so $X$ is metrizable.


??? lemma "Lemma 4.16"
    <a id="l416"></a>
    
    $\begin{align*}
        \text{Let } & X \text{ be a normal space} \\
        & \B \text{ be a countable basis}
    \end{align*}$

    For all $U, V \in \B : \overline U \subseteq V$, consider a Urysohn function $f_{U, V}$
    for $\overline U, X \setminus V$.

    Then, the collection $(f_{U, V})$ separates points from closed sets. 
    
    ??? proof
        $\begin{align*}
            \text{Let } & x \in X \\
            & C \subseteq X \text{ closed } : x \notin C
        \end{align*}$

        $\begin{align*}
            \implies & X \setminus C \in \Neigh_x \text{ open } \\
            \implies & \exists\, V \in \B : x \in V, V \subseteq X \setminus C \\
            \implieshref{#p46}{P.4.6} &
            \exists\, K \in \Neigh_x \text{ closed } : K \subseteq V \\
            \implies & \exists\, U \in \B : x \in U, U \subseteq K
        \end{align*}$

        To summarize, we have

        $$x \in U \subseteq \overline U \subseteq K \subseteq V \subseteq X \setminus C,$$

        so $f_{U, V}(x) = 0$ and $f_{U, V}(C) = \{1\}$, and thus separates $x$ from $C$.


??? lemma "Lemma 4.17"
    <a id="l417"></a>
    $\begin{align*}
        \text{Let } & X \text{ be a } T_4 \text{ space} \\
        & F : X \to Y \text{ be a continuous function separating points from closed sets}
    \end{align*}$

    Then, $F$ is an embedding.

    ??? proof
        === "Injective"
            Let $x \neq y \in X$.

            $\begin{align*}
                \implieshref{#t46}{T.4.6} & \{y\} \text{ is closed} \\
                \implies & F(x) \notin \overline{F\{y\}} \\
                \implies & F(x) \neq F(y)
            \end{align*}$

        === "Closed map onto its image"
            $\begin{align*}
                \text{Let } & C \subseteq X \text{ closed} \\
                & x \in X : F(x) \in \overline{F(C)}
            \end{align*}$

            $\begin{align*}
                & \implies x \in C \quad \text{as } F $ \text{ separates} \\
                & \implies F(x) \in F(C) \\
                & \implies \overline{F(C)} = F(C)
            \end{align*}$

            So $F(C)$ is closed in the subspace $F(X) \subseteq Y$.

??? lemma "Lemma 4.18"
    <a id="l418"></a>

    A countable product of metrizable spaces is metrizable.

    ??? proof
        Exercise.

??? corollary "Corollary 4.19"
    <a id="c419"></a>
    For a second countable space $X$, the following are equivalent:

    $$
    \begin{align*}
        (1) & \quad X \text{ is metrizable} \\ \\
        (2) & \quad X \text{ embedds into } [0, 1]^\N \\ \\
        (3) & \quad X \text{ is normal}
    \end{align*}
    $$


??? remark "Remark 4.20"
    [C.4.19](#c419) is equivalent to

    $$X \text{ is normal}$$

    by the next theorem.
    

??? theorem "Theorem 4.21"
    ### Second countable regular spaces are normal <a id="4.21"></a> 

    ??? proof
        $\begin{align*}
            \text{Let } & \B \text{ be a countable basis} \\
            & A, B \subseteq X \text{ closed and disjoint}
        \end{align*}$

        $\begin{align*}
            & \implies \forall\, a \in A \exists\, U_a \in \Neigh_a \cup \B :
            a \in U_a \subseteq \overline U_a \subseteq X \setminus B \\
        \end{align*}$

        As $\B$ is countable, we can enumerate the $U_a$ as $U_n$, so

        $$
        \begin{cases}
            A \subseteq \bigcup_{n\in\N} U_n \\
            U_n \cap B = \emptyset
        \end{cases}
        $$

        Similarly, we can find $V_n$ for $B$. However, these unions may not be disjoint.

        $\begin{align*}
            \text{Let } & U_n' := U_n \setminus \bigcup_{i \le n} \overline V_i \\
            & V_n' := V_n \setminus \bigcup_{i \le n} \overline U_i
        \end{align*}$

        $\begin{align*}
            & \implies
            \begin{cases}
                A \subseteq \bigcup_{n\in\N} U_n' \\
                B \subseteq \bigcup_{n\in\N} V_n' \\
            \end{cases} \quad \text{disjoint and open} \\
            & \implies X \text{ is } T_4
        \end{align*}$

        
??? remark "Remark 4.22"
    Urysohn's metrization theorem provides only a sufficient condition for metrizability.
    We have seen metric spaces that are not second countable.


??? theorem "Theorem 4.23"
    ### Nagata-Smirnov metrization theorem <a id="t423"></a>

    $$X \text{ is metrizable } \iff X \text{ is regular and has a countably locally finite basis}$$