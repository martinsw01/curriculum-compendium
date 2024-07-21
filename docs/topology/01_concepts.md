# 1 Concepts

## Metric spaces

??? theorem "Theorem 1.5"
    ### Characteristics of metric continuity

    $\begin{align*}
        \text{Let } & X, Y \text{ be metric spaces} \\
        & f : X \to Y \text{ be a map}
    \end{align*}$

    Then, the following are equivalent:

    $$
    \begin{align*}
        (1) &\quad f \text{ is continuous} \\
        (2) &\quad \forall\ \varepsilon > 0, y \in Y : f^{-1}(B_\varepsilon(y)) \text{ is open} \\
        (3) &\quad \forall\ U \subseteq Y \text{ open } : f^{-1}(U) \text{ is open} \\
        (4) &\quad \forall\ (x_n) \subset X , x_n \to x \in X : f(x_n) \to f(x)
    \end{align*}
    $$

    ??? proof
        === "$(1) \implies (2)$"
            Assume $f^{-1}(B_\varepsilon(y))$ nonempty and choose any $x \in f^{-1}(B_\varepsilon(y))$.

            $\begin{align*}
                &\implies \tilde \varepsilon := d(f(x), y) < \varepsilon \\
                &\implies 0 < \varepsilon' := \varepsilon - \tilde \varepsilon < \varepsilon \\
                &\implies \exists\ \delta' : f(B_{\delta'}(x)) \subseteq B_{\varepsilon'}(f(x)) \subseteq B_\varepsilon(y) \\
                &\implies B_{\delta'}(x) \subseteq f^{-1}(B_\varepsilon'(f(x))) \subseteq f^{-1}(B_\varepsilon(y)) \\
                &\implies f^{-1}(B_\varepsilon(y)) \text{ is open}
            \end{align*}$

        === "$(2) \implies (3)$"
            $\begin{align*}
                \text{Let } & U \subseteq Y \text{ be open} \\
                & x \in f^{-1}(U)
            \end{align*}$

            $\begin{align*}
                & \implies f(x) \in U \\
                & \implies \forall\ \varepsilon > 0 : f^{-1}(B_\varepsilon(f(x))) \text{ is open} \\
                & \implies \exists\ \varepsilon' > 0 : B_{\varepsilon'}(f(x)) \subseteq f^{-1}(B_\varepsilon(f(x))) \subseteq f^{-1}(U) \\
                & \implies f^{-1}(U) \text{ is open}
            \end{align*}$

        === "$(3) \implies (4)$"
            $\begin{align*}
                \text{Let } & (x_n) \subset X \text{ be a sequence s.t.} \\
                & x_n \to x \in X \\
                & U_\varepsilon := B_\varepsilon(f(x))
            \end{align*}$

            $\begin{align*}
                & \implies f^{-1}(U_\varepsilon) \text{ is open} \\
                & \implies \exists\ \delta > 0 : B_\delta(x) \subseteq f^{-1}(U_\varepsilon) \\
                & \implies f(B_\delta(x)) \subseteq U_\varepsilon = B_\varepsilon(f(x)) \\
                & \implies f(x_n) \to f(x)
            \end{align*}$

        === "$(4) \implies (1)$"
            Let $x \in X$ and assume
            $\exists\ \varepsilon > 0\ \forall\ \delta > 0 : f(B_\delta(x)) \not\subseteq B_\varepsilon(f(x))$.
            
            $\begin{align*}
                & \implies \forall n\ \exists\ x_n \in B_{1/n}(x) : f(x_n) \not\in B_\varepsilon(f(x)) \\
                & \implies x_n \to x \text{ but } f(x_n) \not\to f(x) \contradiction
            \end{align*}$


## Topological spaces

??? definition "Definition 1.6"
    ### Topological spaces

    A topology on $X$ is a collection $\O$ of subsets of $X$ called **open sets** s.t.

    $$
    \begin{align*}
        (1) &\quad \emptyset, X \in \O \\
        (2) &\quad U, V \in \O \implies U \cap V \in \O \\
        (3) &\quad S \subset \O \implies \bigcup_{U \in S} U \in \O
    \end{align*}
    $$

    The pair $(X, \O)$ is called a **topological space**.

    $A \subseteq X$ is called **closed** if $X \setminus A \in \O$.


??? definition "Definition 1.8"
    ### Neighborhood

    - $V \subset X$ is a **neighborhood** of $x \in X$ if $\exists\ U \subset V$ open $: x \in U$
    - $\Neigh_x$ is the collection of all neighborhoods of $x$ and is called the **neighborhood system**.

### Continuity

??? definition "Definition 1.10"
    ### Global/Local continuity

    Let $f : X \to Y$ be a map between topological spaces.

    - $f$ is **continuous** if $\forall\ V \in \O_Y : f^{-1}(V) \in \O_X$
    - $f$ is **continuous at $\bm x \in X$** if $\forall\ V \in \Neigh_{f(x)} : f^{-1}(V) \in \Neigh_x$

??? definition "Definition 1.12"
    ### Coarser/Finer topology

    Let $\O_1, \O_2$ be topologies on $X$.

    - $\O_1$ is **coarser** than $\O_2$ if $\O_1 \subset \O_2$
    - $\O_1$ is **finer** than $\O_2$ if $\O_1 \supset \O_2$

??? proposition "Proposition 1.13"
    ### Local/global topologies

    Let $f : X \to Y$ be a map between topological spaces.

    $$f \text{ is continuous } \iff f \text{ is continuous at } x\ \forall\ x \in X$$

    ??? proof
        === "$\implies$"
            $\begin{align*}
                \text{Let } & x \in X \\
                & V \in \Neigh_{f(x)}
            \end{align*}$

            $\begin{align*}
                & \implies f^{-1}(V) \in \O_X, x \in f^{-1}(V) \\
                & \implies f^{-1}(V) \in \Neigh_x
            \end{align*}$

        === "$\impliedby$"
            Let $V \in \O_Y$ and assume $f^{-1}(V) \neq \emptyset$. Further, let $x \in f^{-1}(V)$.

            $\begin{align*}
                &\implies V \in \Neigh_{f(x)} \\
                &\implies f^{-1}(V) \in \Neigh_x \\
                &\implies f^{-1}(V) \in \Neigh_x\quad \forall\ x \in f^{-1}(V) \\
                &\implies f^{-1}(V) \in \O_X
            \end{align*}$


??? definition "Definition 1.15"
    ### Section, retraction

    Let $f : X \to Y$ be a continuous map between topological spaces.

    - A continuous map $s : Y \to X$ s.t. $f \circ s = \id_Y$ is called a **section** (right inverse) of $f$
    - A continuous map $r : X \to Y$ s.t. $r \circ f = \id_X$ is called a **retraction** (left inverse) of $f$.


### Specifying topologies

??? definition "Definition 1.16"
    ### (Sub)basis

    The subset $S \subset \O$ is called a

    - **basis** of $\O$ if

    $$\forall\ U \in \O\ \exists\ S' \subset S : U = \bigcup_{V \in S'} V$$

    - **subbasis** of $\O$ if

    $$\forall\ U \in \O\ \exists\ S'_f \subset S \text{ finite } : U = \bigcup_{V \in S'_f} V$$


??? remark "Remark 1.17"
    Any $S \subset \mathcal{P}(X)$ can be a subbasis of $X$, as unions of finite intersections form
    the topology generated by $S$. It has subbasis $S$ and is the coarsest topology s.t. $S \subset \O$.

    A topology is a basis for itself.


??? example "Example 1.18"
    - Bounded open intervals form a basis for the standard topology on $\R$
    - Unbounded intervals form a subbasis for the standard topology on $\R$

??? remark "Remark 1.19"
    Let $S \subset \O_Y$ be a subbasis for $\O_Y$. Then, we have that

    $$f^{-1}(U) \in \O_X \quad \forall\ U \in S \implies f \text{ is continuous}$$

??? definition "Definition 1.20"
    ### Neighborhood basis

    A collection $\B_x$ of neighborhoods of $x \in X$ is called a **neighborhood basis** if

    $$\forall\ U \in \Neigh_x\ \exists\ B \in \B_x : B \subset U$$

    
??? example "Example 1.21"
    For a metric space $X$ and $x \in X$,

    $$\B_x := \{ B_{1/n}(x) \mid n \in \N \}$$

    is a neighborhood basis for $x$.


??? remark "Remark 1.22"
    - If $S \subset \O$ is a basis, then $\B_x := \{B \in S \mid x \in B\}$ is a neighborhood basis for $x$.
    - Given a neighborhood basis $\B_x$ for all $x \in X$, we can construct a basis $S$ for $\O$ by

    $$S := \bigcup_{x\in X} \B_x$$ 


## Axiomatizing topological spaces via neighborhoods

??? remark "Remark 1.23"
    The neighborhood system $\Neigh_x$ for $x \in X$ has the following
    properties:

    $$
    \begin{align*}
        (1) &\quad \Neigh_x \neq \emptyset \\
        (2) &\quad V \in \Neigh_x \implies x \in V \\
        (3) &\quad V \in \Neigh_x, W \supseteq V \implies W \in \Neigh_x \\
        (4) &\quad V, W \in \Neigh_x \implies V \cap W \in \Neigh_x \\
        (5) &\quad \forall\ V \in \Neigh_x\ \exists\ U \in \Neigh_x : V \in \Neigh_y\ \forall\ y \in U
    \end{align*}
    $$


??? theorem "Theorem 1.24"
    ### Topology via neighborhoods <a id="t124"></a>

    Any family $(\Neigh_x)_{x \in X}$ satisfying the axioms in [Remark 1.23](#r123) forms
    the neighbourhood system of a unique topology $\O$ on $X$.

    ??? proof
        === "Uniqueness"
            We have that $U \in \O \iff \forall\ x \in U : U \in \Neigh_x$. Therefore it
            follows that

            $$\O = \{ U \subseteq X \mid \forall\ x \in U : U \in \Neigh_x \}$$

            is the only possible topology with $(\Neigh_x)_{x \in X}$.

        === "Forms a topology"
            === "Closed under pairwise intersections"
                Let $V, W \in \O$.

                $\begin{align*}
                    \implies& V, W \in \Neigh_x \quad \forall\ x \in V, W \\
                    \overset{(4)}{\implies}& V \cap W \in \Neigh_x \\
                    \implies& V \cap W \in \O
                \end{align*}$

            === "Closed under arbitrary unions"
                Let $S \subset \O$.

                $\begin{align*}
                    \overset{(3)}{\implies}& \bigcup_{V \in S} V \in \Neigh_x \quad \forall\ V \in S, x \in V \\
                    \implies& \bigcup_{V \in S} V \in \O
                \end{align*}$

            === "Contains $X$ and $\emptyset$"
                $\begin{align*}
                    &X \in \Neigh_x \quad \forall\ x \in X \\
                    &\implies X \in \O
                \end{align*}$

                $\begin{align*}
                    &\emptyset \in \Neigh_x \quad \forall\ x \in X \\
                    &\implies \emptyset \in \O
                \end{align*}$

        === "$\bm \Neigh_x$ are the only neighborhoods of $\bm x$ for $\bm \O$"
            Let $V$ be a neighborhood of $x$.

            $\begin{align*}
                \implies& \exists\ U \in \O : x \in U \subset V \\
                \implies& U \in \Neigh_x \\
                \overset{(3)}{\implies}& V \in \Neigh_x
            \end{align*}$

            ---

            $\begin{align*}
                \text{Let } & V \in \Neigh_x \\
                & U = \{y \in X \mid V \in \Neigh_y\}
            \end{align*}$

            $\begin{align*}
                \overset{(2)}{\implies}& U \supseteq V \\
                \implies& x \in U
            \end{align*}$

            ??? proof "Claim: $U \in \O$"
                Let $y\in U$.

                $\begin{align*}
                    \implies& V \in \Neigh_y \\
                    \overset{(5)}{\implies}& \exists\ W \in \Neigh_y : V \in \Neigh_z\quad \forall\ z \in W \\
                    \implies& W \subset U \\
                    \overset{(3)}{\implies}& W \in \Neigh_y \\
                    \implies& U \in \Neigh_y
                \end{align*}$


## Open and closed maps

??? definition "Definition 1.25"
    ### Open/closed maps

    The map $f : X \to Y$ between topological spaces is called **open** if

    $$f(U) \in \O_Y \quad \forall\ U \in \O_X$$

    Analogously, $f$ is called **closed** for closed sets.


??? example "Example 1.26"
    Continuity, openness, and closeness are independent properties.

    === "$(1)$"
        The map

        $$
        \begin{align*}
            \R^2 &\to \R \\
            (x, y) &\mapsto y
        \end{align*}
        $$

        is continuous and open, but not closed. Take for example the closed subset
        $U = \{(x, y) \in \R^2 \mid y = \arctan x\}$. Then, we have $f(U) = (-\pi/2, \pi/2)$,
        which is not closed in $\R$.

    === "$(2)$"
        The map

        $$
        \begin{align*}
            \R &\to \R \\
            x &\mapsto 0
        \end{align*}
        $$

        is continuous and closed, but not open.

    === "$(3)$"
        For the identity map between a set with two different topologies $\mathcal{S}$ and $\mathcal{T}$

        $$
        \begin{align*}
            \id : (X, \mathcal{S}) &\to (X, \mathcal{T}) \\
            x &\mapsto x
        \end{align*}
        $$

        we have

        - $\mathcal{T} \subset \mathcal{S} \implies \id$ is continuous, but not open nor closed
        - $\mathcal{S} \subset \mathcal{T} \implies \id$ is open and closed, but not continuous
        - $\mathcal{S} = \mathcal{T} \implies \id$ is continuous, open, and closed


??? definition "Definition 1.27"
    ### Homeomorphism

    A continuous map $f : X \to Y$ is called a **homeomorphism** if $f$ is bijective and its
    inverse $f^{-1}$ is continuous.

??? remark "Remark 1.28"
    A bijective continuous map is a homeomorphism if it is open or closed.


## Interior, boundary and closure

??? definition "Definition 1.29"
    Let $A \subseteq X$ and $x \in X$.

    ### Interior point

    $x$ is called an **interior point** of $A$ if $A \in \Neigh_x$.

    The interior $A^\circ$ is the set of all interior points of $A$.

    ---

    ### Boundary point

    $x$ is called a **boundary point** of $A$ if

    $$A, (X \setminus A) \not\in \Neigh_x$$

    The boundary $\partial A$ is the set of all boundary points of $A$.

    ---

    ### Closure point

    $x$ is called a **closure point** of $A$ if

    $$V \cap A \neq \emptyset \quad \forall\ V \in \Neigh_x$$

    The closure $\overline A$ is the set of all closure points of $A$.

    ---

    ### Limit point

    $x$ is called a **limit point** of $A$ if

    $$(V \cap A) \setminus \{x\} \neq \emptyset \quad \forall\ V \in \Neigh_x$$

    ---

    ### Isolated point

    $x$ is called an **isolated point** of $A$ if

    $$\exists\ V \in \Neigh_x : V \cap A = \{x\}$$


??? remark "Remark 1.31"
    - $A^\circ$ is the maximal open subset of $A$
    - $\overline A$ is the smallest closed set containing $A$
    - $\partial A = \overline A \cap \overline{(X \setminus A)}$


## Continuity and Seperability

??? definition "Definition 1.32"
    ### First/Second countable

    A topological space $X$ is called 

    1. **first countable** if every point has a countable neighborhood basis
    2. **second countable** if it has a countable basis

??? remark "Remark 1.33"
    - Euclidean spaces are second countable:

    $$\{B_{1/n}(x) \mid n \in \N, x \in \Q^d\} \text{ is a countable basis}$$

    - Second countability implies first countability
    - Metric spaces are first countable, but not necessarily second countable


??? example "Example 1.34"
    The space $\ell^\infty = (\R^\N, \| \cdot \|_\infty)$ is first countable, but not second
    countable.

    $\begin{align*}
        \text{Let } & S = \{0, 1\}^\N \subset \ell^\infty \\
        & x \neq y \in S
    \end{align*}$

    $\begin{align*}
        & \implies B_{1/2}(x) \cap B_{1/2}(y) = \emptyset \\
        & \implies \{B_{1/2}(x)\}_{x \in S} \text{ is an uncountable family of disjoint open sets} \\
        & \implies \text{Any basis must have uncountably many elements}
    \end{align*}$

??? definition "Definition 1.35"
    ### Dense subset

    A subset $A \subseteq X$ is called
    
    - **dense** if $\overline A = X$
    - **nowhere dense** if $(\overline A)^\circ = \emptyset$

??? definition "Definition 1.36"
    ### Separable space

    A topological space $X$ is called **separable** if

    $$\exists\ A \subseteq X : A \text{ is countable and dense}$$


??? example "Example 1.37"
    $\ell^\infty$ is not separable.

    Let $A \subseteq \ell^\infty$ be a dense subset, and consider the balls $B_{1/2}(x)_{x \in S}$.
    
    ??? proof "Claim: $\forall\ x \in S\ \exists\ y \in B_{1/2}(x) : x \in A$"
        As $\overline A = \ell^\infty$, all points $x\in \ell^\infty$ are closure points, so
        $V \cap A \neq \emptyset$ for all $V \in \Neigh_x$. $B_{1/2}(x)$ is a neighborhood of
        all its points, so

        $$B_{1/2}(x) \cap A \neq \emptyset$$

    Thus, $A$ must be uncountable, and $\ell^\infty$ is not separable.


??? theorem "Theorem 1.38"
    ### Second countable spaces are separable

    ??? proof
        Let $\B = \{B_n \neq \emptyset\}_{n \in \N}$ be a countable basis for $X$. Choose for
        each $n$ a point $p_n \in B_n$ (axiom of choice) and let $P = \{p_n\}_{n \in \N}$.

        Further, choose any $x \in X, V \in \Neigh_x$.

        $\begin{align*}
            & \implies \exists\ k : B_k \subset V \\
            & \implies p_k \in V \cap P \\
        \end{align*}$

        As $V$ was chosen arbitrarily, $x$ is a closure point of $P$. Moreover, $x$ was chosen
        arbitrarily, so $P$ is dense in $X$. Thus, $X$ is separable.




    