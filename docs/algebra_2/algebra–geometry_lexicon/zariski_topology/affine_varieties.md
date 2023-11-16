# Affine varieties

??? proposition "Proposition 3.1"
    ## Unions and intersections of affine varieties <a id="p31"></a>

    Let $n\in\N$

    === "a)"
        For $I, J \ideal K[\underline x]$:

        $$\V(I) \cup \V(J) = \V(I\cap J)$$

    === "b)"
        For $\emptyset \neq \M$, the set of subsets of $K[\underline x]$:

        $$\bigcap_{S\in\M} \V(S) = \V\left(\bigcup_{S\in\M} S\right)$$

    ??? proof
        === "a)"
            Convince yourself that the inclusion $\subseteq$ is trivial.

            Let $p\in \V(I\cap J)$ </br>
            Assume $p \not\in \V(I)$. We must show that it implies $p\in \V(J)$.

            $$
            \begin{align*}
                \implies \exists\ & g \in I \text{ s.t.} \\
                &g(p) \neq 0
            \end{align*}
            $$

            Let $f \in J$.

            $$
            \begin{align*}
                \implies & f \cdot g \in I \cap J \\
                \implies & f(p)g(p) = 0 \\
                \implies & f(p) = 0 & \text{ as } g(p) \neq 0 \\
                \implies & f \in \V(J) & & \square
            \end{align*}
            $$
            
        === "b)"
            This is also somehow clear.


???+ definition "Definition 3.2"
    ## The Zariski-Topology

    Closed sets are the affine varieties.

    The closed sets of the subset topology $Y \subseteq K^n$ are $Y \cap X$, where $X$ is an affine variety.


??? remark "Remark 3.3"
    === "a)"
        The closed subsets are $\V(S)=\V(I)$ with $I:=\I(S)$

        $\implieshref{../../noetherian_and_artinian_rings/7noether_rings_modules/#t213}{T.2.13}$
        $X=\V(f_1, ..., f_m)$ if $I=(f_1, ..., f_m)$
        
    === "b)"
        By [L.1.18](../../hilberts_nullstellensatz/4nullstellensatz_2/#l118) We have a formula for the closure of sets:

        $$\overline X = \V(\I(X))$$

    === "c)"
        Let $Y \subseteq K^n$ be an affine variety.

        The closed subsets are the subvarieties (by [P.3.1](#p31))

    === "d)"
        On $\R^n$ or $\C^n$, the Zariski-topology is coarser than the usual topology.

    === "e)"
        Finite sets in $K^n$ are closed.

    === "f)"
        $$X \subset K^1 \text{ is closed } \iff |X| < \infty \lor X = K^1$$

    === "g)"
        Every polynomial function $K^n \to K$ is continuous.

    === "h)"
        Open sets are given by polynomial inequalities.

    === "i)"
        If $|K|$, then it is not Hausdorff (T2).

        Moreover, if $\emptyset \neq U_1, U_2 \subseteq K^n$ are open, then $U_1 \cap U_2 \neq \emptyset$.


???+ definition "Definition 3.4"
    ## Morphisms

    Let $X \subseteq K^m, Y \subseteq K^n$ be affine varietiies.

    The map

    $$f : X \to Y$$

    is called a **morphism** if for all $P\in X$ there are $f_a, ..., f_n \in K[x_1, ..., x_m]$ such that

    $$f(P) = \left(f_1(P), ..., f_n(P)\right) \in Y$$

    $\operatorname{Mor}(X, Y)$ is the **set of all morphisms** from $X$ to $Y$.

    A morhpism $f$ is called an **isomorphism** if $\exists\ g : Y \to X$ s.t.

    $$f \circ g = g \circ f = \mathcal{Id}$$

