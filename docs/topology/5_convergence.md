# 5 Convergence

$\newcommand{\G}{\mathcal{G}}$s

## Sequences in metric spaces

??? proposition "Proposition 5.1"
    ### Closure and continuity via metric limits <a id="p51"></a>

    $\begin{align*}
        \text{Let } & X, Y \text{ be metric spaces} \\
        & A \subseteq X
    \end{align*}$

    $$
    \begin{align*}
        (1) & \quad x \in \overline A \iff \exists\, (x_n \in A)_{n\in\N} : x_n \to x \\ \\
        (2) & \quad f : X \to Y \text{ is continuous at } x \in X
        \iff x_n \to x \text{ implies } f(x_n) \to f(x) 
    \end{align*}
    $$

    ??? proof
        === "$(1)$"
            === "$\implies$"
                $\begin{align*}
                    &\text{Let } x \in \overline A \\
                    & \implies B_{1/n}(x) \in \Neigh_x \\
                    & \implies B_{1/n}(x) \cap A \neq \emptyset \\
                    & \text{Pick any } x_n \in B_{1/n}(x) \cap A \\
                    & \implies x_n \to x
                \end{align*}$
    
            === "$\impliedby$"
                $\begin{align*}
                    &\text{Let } U \in \Neigh_x \\
                    & \implies \exists\, B_\varepsilon(x) \subseteq U \\
                    & \implies \exists\, N : x_N \in B_\varepsilon(x) \\
                    & x_N \in A \\
                    & \implies U \cap A \supseteq B_\varepsilon(x) \cap A \neq \emptyset \\
                    & \implies x \in \overline A
                \end{align*}$

        === "$(2)$"
            === "$\implies$"
                $\begin{align*}
                    & \text{Let } \varepsilon > 0 \\
                    & \implies \exists\, B_\delta(x) \subseteq X : f(B_\delta(x)) \subseteq B_\varepsilon(f(x)) \\
                    & \exists\, N : (x_n)_{n\ge N} \subseteq B_\delta(x) \\
                    & \implies (f(x_n))_{n\ge N} \subseteq B_\varepsilon(f(x)) \\
                    & \implies f(x_n) \to f(x)
                \end{align*}$

            === "$\impliedby$"
                Assume $f$ is discontinuous at $x \in X$.

                $$\implies \exists\, \varepsilon > 0 : \forall\, \delta > 0 :
                f(B_\delta(x)) \not\subseteq B_\varepsilon(f(x))$$

                $\begin{align*}
                    \text{Let } & \delta = 1/n \\
                    & x_n \in B_\delta(x) : f(x_n) \notin B_\varepsilon(f(x)) \\
                \end{align*}$

                Then, we have that $x_n \to x$ but $f(x_n) \not\to f(x)$, which is a
                contradiction.


## Sequential convergence

??? definition "Definition 5.2"
    ### Sequential convergence

    A sequence $(x_n)_{n\in\N}$ in a topological space $X$ **converges to** $\bm x$ if

    $$\forall\, U \in \Neigh_x\ \exists\, N : (x_n)_{n\ge N} \subseteq U$$


??? remark "Remark 5.3"
    - It suffices to check this for a neighborhood basis.
    - Limit points on a topological space are not unique.
    ($x_n \to x \quad \forall\, x \in X$ for a coarse space)
    - Sequential limits are unique in Hausdorff spaces
    - If $(x_n \in A)_{n\in\N}$ is a sequence such that $x_n \to x$, then $x \in \overline A$.

??? example "Example 5.4"
    Let $X = \R^\R = \{ f : \R \to \R \}$.

    - $(f_n)_{n\in\N}$ converges in the product topology to $f$ $\iff$ $f_n \to f$ pointwise.
    - $U(f; U, \varepsilon) = \{ g : \R \to \R : |f(x) - g(x)| < \varepsilon\}$ is a
    neighborhood basis for $f$ in the product topology.


??? theorem "Theorem 5.5"
    ### Dominated convergence theorem <a id="t55"></a>

    $\begin{align*}
        \text{Let } & (f_n : \R \to \R)_{n\in\N}
        \text{ be a sequence of measurable functions s.t.} \\
        & f_n \to f \text{ pointwise and} \\
        & |f_n| \le g \text{ for some } g \in L^1
    \end{align*}$

    $$\implies f \text{ is integrable and } \int f\,d\mu = \lim_{n\to\infty} \int f_n\,d\mu$$


??? example "Example 5.6"
    Define the function

    $$
    \begin{align*}
        I : (0, 1)^{(0, 1)} &\to (0, 1) \\
        f &\mapsto \int_0^1 f\,d\mu
    \end{align*}
    $$

    By [DCT](#t55), $I(f_n) \to I(f)$, however, $i$ is not continuous:

    A basis of open sets is given by

    $$U(f; E, \varepsilon) = \{g : (0, 1) \to (0, 1) \text{ measurable } \mid 
    \forall\, x \in E : |f(x) - g(x)| < \varepsilon\}$$

    for $E \subseteq \R$ finite and $\varepsilon > 0$. Note that $I(U) = (0, 1)$, so
    for $0 < a < b < 1$, we have that $I^{-1}(a, b)$ cannot be open.


??? definition "Definition 5.7"
    ### Fréchet-Urysohn, sequential

    Let $X$ be a topological space.

    $X$ is **Fréchet-Urysohn** if

    $$x \in \overline A \iff \exists\, (x_n \in A)_{n\in\N} : x_n \to x$$

    ---

    $X$ is **sequential** if

    $$\forall\, A \subseteq X \text{ sequentially closed } : A \text{ is closed}$$

??? remark "Remark 5.8"
    **Closed sets are always sequentially closed.**

    Assume the contrary.

    $\begin{align*}
        & \implies \exists\, (x_n \in A)_{n\in\N} : x_n \to x \notin A \\
        & \implies X \setminus A \in \Neigh_x \\
        & \implies \exists\, N : (x_n)_{n\ge N} \subseteq X \setminus A \quad \contradiction
    \end{align*}$

    ---

    **Comparing Fréchet-Urysohn and sequential spaces:**

    Consider $A \subseteq X$ non-closed.

    - $X$ is Fréchet-Urysohn $\implies \forall\, x \in \overline A \setminus A$ is a limit
    of a squence in $A$.
    - $X$ is sequential $\implies \exists\, x \in \overline A \setminus A$ is a limit of a
    sequence in $A$.

??? theorem "Theorem 5.9"
    ### Closure and continuity via sequential limits <a id="t59"></a>

    $$
    X \text{ is first countable} \overset{(1)}{\implies}
    X \text{ is Fréchet-Urysohn} \overset{(2)}{\implies}
    X \text{ is sequential}
    $$


## Nets

??? definition "Definition 5.10"
    ### Directed set

    A directed set is a preordered set $(I, \le)$ such that

    $$\forall\, i, j \in I\ \exists\, k \in I : i, j \le k$$

??? example "Example 5.11"
    The following sets are directed:

    - Totally ordered sets, e.g. $(\N, \le)$
    - $(\Neigh_x, \supseteq)$
    - Partitions of an interval $(a, b)$: $(P_{(a, b)}, \subseteq)$


??? definition "Definition 5.12"
    ### Net, convergence

    A **net** in a topological space $X$ is a map $I \to X$ for a directed set $I$.

    ---

    A net $(x_i)_{i\in I} \subseteq X$ **converges to** $x \in X$, $x_n \to x$, if

    $$\forall\, U \in \Neigh_x\ \exists\, J \subseteq I : (x_i)_{i \ge J} \subseteq U$$

??? example "Example 5.13"
    Any sequence is a net.

    ---

    A function $f: (a, b) \to \R$ is Riemann integrable if and only if the two nets
    $(P_{(a, b)}, \subseteq) \to \R$

    $$
    \begin{align*}
        L : (t_0, \dots, t_n) &\mapsto \sum_{i=1}^n (t_i - t_{i-1}) \inf\{f([t_{i-1}, t_i])\} \\
        U : (t_0, \dots, t_n) &\mapsto \sum_{i=1}^n (t_i - t_{i-1}) \sup\{f([t_{i-1}, t_i])\}
    \end{align*}
    $$

    converges to the same value.


??? theorem "Theorem 5.14"
    ### Closure and continuity via net limits <a id="t514"></a>

    $\begin{align*}
        \text{Let } & X, Y \text{ be topological spaces} \\
        & A \subseteq X
    \end{align*}$

    $$
    \begin{align*}
        (1) & \quad x \in \overline A \iff \exists\, (x_i \in A)_{i\in I} \text{ net } :
        x_i \to x \\ \\
        (2) & \quad f : X \to Y \text{ is continuous at } x \in X
        \iff x_i \to x \text{ implies } f(x_i) \to f(x)
    \end{align*}
    $$

    ??? proof
        Analogous to the proof of [P.5.1](#p51).

??? theorem "Theorem 5.15"
    ### Unique limits in Hausdorff spaces <a id="t515"></a>

    $$X \text{ is Hausdorff }
    \iff \text{ Any convergent net in } X \text{ has a unique limit}$$

    ??? proof
        === "$\implies$"
            $\begin{align*}
                \text{Let } & x, y \in X \text{ be limit points of the net} \\
                & (x_i)_{i\in I}
            \end{align*}$

            Assume $x \neq y$. By $T_1$, there exists $U \in \Neigh_x, V \in \Neigh_y$
            open and disjoint. However, the tail of $(x_i)_{i\in I}$ is eventually in both
            $U$ and $V$, which is a contradiction.

        === "$\impliedby$"
            ??? proof "Claim: $\Delta = \{(x, x) : x \in X\} \subseteq X \times X \text{ is closed }\iff X \text{ is Hausdorff}$"
                Exercise.

            Let $(x, y) \in \overline \Delta$.

            $\begin{align*}
                \implieshref{#t514}{T.5.14} & \exists\, (x_i, x_i)_{i\in I} \text{ net in }
                \Delta : (x_i, x_i) \to (x, y) \\
                \implies & x_i \to x, x_i \to y \\
                \implies & x = y \\
                \implies & (x, y) \in \Delta \\
                \implies & \overline \Delta = \Delta \text{ is  closed} \\
                \implies & X \text{ is Hausdorff}
            \end{align*}$


## Cluster points and subnets

??? definition "Definition 5.16"
    ### Cluster point of a net

    $x \in X$ is a **cluster point** of a net $(x_i)_{i\in I}$ if

    $$\forall\, A \in \Neigh_x, i \in I\ \exists\, j \ge i : x_j \in A$$


??? definition "Definition 5.17"
    ### Subnet

    A net $(y_j)_{j\in J}$ is a **subnet** of $(x_i)_{i\in I}$ if

    $$
    \begin{align*}
        \exists\,& \phi : J \to I \text{ order-preserving s.t.} \\
        & (1) \quad y_j = x_{\phi(j)} \quad \forall\, j \in J \\
        & (2) \quad \forall\, i \in I\ \exists\, j \in J : \phi(j) \ge i \quad \text{(cofinal)}
    \end{align*}
    $$

??? theorem "Theorem 5.18"
    ### Cluster points as subnet limits <a id="t518"></a>

    $\begin{align*}
        \text{Let } & X \text{ be a topological space} \\
        & (x_i \in X)_{i\in I} \text{ be a net} \\
        & x \in X
    \end{align*}$
    
    $$x \text{ is a cluster point of } (x_i)_{i\in I}
    \iff (x_i)_{i\in I} \text{ has a subnet converging to } x$$

    ??? proof
        === "$\implies$"
            $\begin{align*}
                \text{Let } & J = \{(i, U) \mid i \in I, U \in \Neigh_x : x_i \in U\} \\
                & (i, U) \le (j, V) \iff i \le j \land U \supset V
            \end{align*}$

            Then, $\phi : (i, U) \mapsto i$ is order-preserving and cofinal. Let further
            $U \subseteq \Neigh_x$.

            $\begin{align*}
                & \implies \exists\, i \in I : x_i \in U \\
                & \implies (i, U) \in J \\
                & \text{Let } (j, V) \ge (i, U) \\
                & \implies x_j \in V \subseteq U
            \end{align*}$

        === "$\impliedby$"
            $\begin{align*}
                \text{Let } & (y_j)_{j\in J} \text{ be a subnet of} \\
                & (x_i)_{i\in I} \text{ s.t.} \\
                & y_j \to x
            \end{align*}$

            For $A \in \Neigh_x, i \in I$, we have that

            $\begin{align*}
                (1) & \quad \exists\, \tilde\jmath \in J : \phi(\tilde\jmath) \ge i \\
                (2) & \quad \exists\, \hat\jmath \in J : (y_j)_{j \ge \hat\jmath} \subseteq A
            \end{align*}$

            $\begin{align*}
                \overset{(2)}{\implies} & (x_{\phi(j)})_{j \ge \hat\jmath} \subseteq A \\
                \overset{(1)}{\implies} & (x_{\phi(j)})_{j \ge \hat\jmath, \tilde\jmath} \subseteq A \\
                \implies & x \text{ is a cluster point}
            \end{align*}$


## Filters

??? definition "Definition 5.19"
    ### Filter

    A **filter** on a set $X$ is collection of subsets of $X$ such that

    $$
    \begin{align*}
        (1) & \quad \emptyset \notin \F, X \in \F \\ \\
        (2) & \quad U, V \in \F \implies U \cap V \in \F \\ \\
        (3) & \quad U \in \F, U \subseteq V \implies V \in \F
    \end{align*}
    $$


??? exmaple "Example 5.20"
    The neighborhood system $\Neigh_x$ is a filter on $X$, called the **neighborhood
    filter**.


??? definition "Definition 5.21"
    ### Filter basis

    A subcollection $\B \subseteq \F$ is a **basis** for a filter $\F$ if

    $$\forall\, U \in \F\ \exists\, V \in \B : V \subseteq U$$


??? remark "Remark 5.22"
    A collection $\B \neq \emptyset$ of subsets $\emptyset \neq U \subseteq X$ is a basis
    for a filter $\F$ if and only if

    $$\forall\, U, V \in \B\ \exists\, W \in \B : W \subseteq U \cap V$$

    - In particular,if it is closed under intersections, it is a basis.
    - Then, the filter generated by $\B$ is

    $$\F = \{V \subseteq X \mid \exists\, U \in \B : U \subseteq V\}$$

    - It is the unique filter for which $\B$ is a basis.


??? example "Example 5.23"
    A neighborhood basis is a basis for the neighborhood filter and vice versa.


## Convergence of filters

??? definition "Definition 5.24"
    ### Filter convergence

    A filter $\F$ on a set $X$ **converges** to $x \in X$, $\F \to x$, if

    $$\Neigh_x \subseteq \F$$

    ---

    A basis $\B$ for a filter $\F$ **converges** to $x \in X$, $\B \to x$, if $\F \to x$.
    Equivalently:

    $$\forall\, U \in \Neigh_x\ \exists\, B \in \B : B \subseteq U$$


??? definition "Definition 5.26"
    ### Image filter

    Let $f: X \to Y$ be a map and $\F$ a filter on $X$. The **image filter** $f(\F)$ is
    the filter with basis

    $$\B = \{f(U) \mid U \in \F\}$$


??? theorem "Theorem 5.27"
    ### Closure and continuity via filter limits <a id="t527"></a>

    $\begin{align*}
        \text{Let } & X, Y \text{ be topological spaces} \\
        & A \subseteq X
    \end{align*}$

    $$
    \begin{align*}
        (1) & \quad x \in \overline A \iff \exists\, \F \text{ filter on } X : A \in \F, \F \to x \\ \\
        (2) & \quad f : X \to Y \text{ is continuous at } x \in X
        \iff \F \to x \text{ implies } f(\F) \to f(x)
    \end{align*}
    $$

    ??? proof
        === "$(1)$"
            === "$\implies$"
                $\begin{align*}
                    & \text{Let } x \in \overline A \\
                    & \implies \forall\, U \in \Neigh_x : U \cap A \neq \emptyset \\
                    & \implies \B = \{A \cap U \mid U \in \Neigh_x\} \text{ is a basis} \\
                    & \implies \F \supseteq \Neigh_x, A \in \F
                \end{align*}$

            === "$\impliedby$"
                Assume that $\F \to x$ $(i)$ and $A \in \F$ $(ii)$.

                $\begin{align*}
                    \overset{(i)}{\implies} & \forall\, U \in \Neigh_x : U \in \F \\
                    \overset{(ii)}{\implies} & A \cap U \in \F \\
                    \implies & A \cap U \neq \emptyset \\
                    \implies & x \in \overline A
                \end{align*}$

        === "$(2)$"
            === "$\implies$"
                Assume $\F \to x$ and let $V \in \Neigh_{f(x)}$.

                $\begin{align*}
                    & \implies f^{-1}(V) \in \Neigh_x \\
                    & \implies f^{-1}(V) \in \F \\
                    & \implies f(f^{-1}(V)) \in f(\F) \\
                    & \implies f(f^{-1}(V)) \subseteq V \in f(\F) \\
                    & \implies \Neigh_{f(x)} \subseteq f(\F) \\
                    & \implies f(\F) \to f(x)
                \end{align*}$

            === "$\impliedby$"
                $\begin{align*}
                    & \text{Let } \F = \Neigh_x \\
                    & \implies \F \to x \\
                    & \implies f(\F) \to f(x) \\
                    & \implies \Neigh_{f(x)} \subseteq f(\F) \\
                    & \implies \exists\, U \in \F = \Neigh_x : f(U) \subseteq V \\
                    & \implies f \text{ is continuous at } x
                \end{align*}$


??? theorem "Theorem 5.28"
    ### Filter convergence in initial topologies <a id="t528"></a>

    $\begin{align*}
        \text{Let } & X_i \text{ be topological spaces} \\
        & X \text{ carry the initial topology w.r.t. } f_i : X \to X_i \\
        & \F \text{ be a filter on } X
    \end{align*}$

    $$\F \to x \iff f_i(\F) \to f_i(x) \quad \forall\, i\in I$$

    ??? proof
        === "$\implies$"
            Follows from [T.5.27](#t527).

        === "$\impliedby$"
            The set

            $$\B = \left\{\bigcap_{k\in K} f_k^{-1}(U_k)
            \mid K \subseteq I \text{ finite}, U_k \in \Neigh_{f_k(x)}\right\}$$

            is a neighborhood basis for $x$ in the initial topology.

            $\begin{align*}
                & f_k(\F) \to f_k(x) \\
                & \implies \forall\, U_k \in \Neigh_{f_k(x)} : U_k \in f_k(\F) \\
                & \implies \exists\, F_k \in \F : f_k(F_k) \subseteq U_k \\
                & \text{Let } F = \bigcap_{k\in K} F_k \in \F \\
                & \implies F \subseteq \bigcap_{k\in K} f_k^{-1}(f_k(F_k))
                \subseteq \bigcap_{k\in K} f_k^{-1}(U_k) \in \B \\
                & \implies \B \subseteq \F \\
                & \implies \Neigh_x \subseteq \F \\
                & \implies \F \to x
            \end{align*}$


## Cluster points of filters

??? definition "Definition 5.29"
    ### Cluster point of a filter

    $x \in X$ is a **cluster point** of a filter $\F$ if

    $$\forall\, F \in \F, U \in \Neigh_x : F \cap U \neq \emptyset$$

    Equivalently,

    $$x \in \bigcap_{F \in \F} \overline F$$

    ---

    A basis $\B$ for a filter $\F$ has a **cluster point** $x \in X$ if $\F$ does.
    Equivalently

    $$\forall\, B \in \B, U \in \Neigh_x : B \cap U \neq \emptyset$$

    or

    $$x \in \bigcap_{B \in \B} \overline B$$


??? theorem "Theorem 5.30"
    ### Cluster points as limits of finer filters <a id="t530"></a>

    $$x \in X \text{ is a cluster point of } \F
    \iff \exists\, \G \supseteq \F \text{ finer filter } : \G \to x$$

    ??? proof
        === "$\implies$"
            $\begin{align*}
                & \text{Let } x \in X \text{ be a cluster point of } \F \\
                & \implies \forall\, F \in \F, U \in \Neigh_x : F \cap U \neq \emptyset \\
                & \implies \G = \{F \cap U \mid F \in \F, U \in \Neigh_x\} \text{ is a filter} \\
                & \F \cup \Neigh_x \subseteq \G \\
                & \implies \G \text{ is a finer filter than } \F \text{ and } \G \to x
            \end{align*}$
    
        === "$\impliedby$"
            $\begin{align*}
                & \text{Let } \G \text{ be a finer filter than } \F \text{ s.t. } \G \to x \\
                & \implies \forall\, F \in \F, U \in \Neigh_x : F, U \in \G \\
                & \implies F \cap U \in \G \\
                & \implies F \cap U \neq \emptyset \\
                & \implies x \text{ is a cluster point of } \F
            \end{align*}$


## Translating between nets and filters

??? definition "Definition 5.31"
    ### Filter generated by a net, net based on a filter

    Let $(x_i)_{i\in I}$ be a net in $X$. The tails

    $$\{x_j \mid j \ge i\} \quad i \in I$$

    form a basis for a filter, called the **filter of tails generated by** $(x_i)_{i\in I}$.

    ---

    The pair $(I, \le)$ with

    $$
    \begin{align*}
        I = \{(x, F) \mid F \in \F, x \in F\} \\
        (x, F) \le (y, G) \iff F \supseteq G
    \end{align*}
    $$

    is a directed set, and
    
    $$(x, F) \mapsto x$$

    is the **net based on** $\F$.


??? remark "Remark 5.32"
    - The net based on a filter $\F$ generates a filter of tails that equals $\F$.
    - The filter of tails generated by a net yields a net
    different from the original one.


??? theorem "Theorem 5.33"
    ### Equivalence of nets and filters <a id="t533"></a>

    $$
    \begin{align*}
        (1) & \quad
        \left\{\begin{matrix}
            \quad \text{A net } {x_i}_{i\in I} \text{ converges to (has cluseter point) } x \\
            \Updownarrow \\
            \text{ The filter generated by } {x_i}_{i\in I} \text{ converges to (has cluster point) } x
        \end{matrix}\right. \\ \\ \\
        (2) & \quad
        \left\{\begin{matrix}
            \text{A filter } \F \text{ converges to (has cluster point) } x \\
            \Updownarrow \\
            \text{ The net based on } \F \text{ converges to (has cluster point) } x
        \end{matrix}\right.
    \end{align*}
    $$


??? remark "Remark 5.34"
    - The filter generated by a subnet is finer than the filter generated by the original
    net.
    - The net based on a finer filter need not be a subnet of a net based on the original
    filter.


## Ultrafilters

??? definition "Definition 5.35"
    ### Free/fixed filter, ultrafilter

    The filter $\F$ is **free** if

    $$\bigcap_{F \in \F} F = \emptyset$$

    and **fixed** otherwize.

    ---

    $\F$ is an **ultrafilter** if it is maximal with respect to inclusion.


??? example "Example 5.36"
    $\begin{align*}
        \text{Let } & A \subseteq X \text{ be a non-empty set} \\
        & \F_A := \{U \subseteq X \mid A \subseteq U\}
        \text{ be the principal filter generated by } A
    \end{align*}$
    
    Then, $\F_A$ is fixed. $\F$ is an ultrafilter $\iff A$ is a singleton.

    ---

    $\Neigh_x$ is a fixed filter and an ultrafilter if $\{x\} \in \Neigh_x$.

    ---

    $\B = \{(a, \infty) \mid a \in \N\}$ is a basis for a free filter. (Fréchet filter)

??? remark "Remark 5.37"
    <a id="r537"></a>

    $$\F \text{ is an ultrafilter } \iff \forall\, A \subseteq X : A \in \F \lor X \setminus A \in \F$$

??? theorem "Theorem 5.38"
    ### Extending to ultrafilters <a id="t538"></a>

    Every filter extends to an ultrafilter.

    ??? proof
        Let $\Phi = \{\G \mid \G \text{ is a filter on } X, \F \subseteq \G\}$.

        ??? proof "Claim: $(\Phi, \subseteq)$ satisfies the conditions of [Z.L.](#l539)"
            $\newcommand{\E}{\mathcal{E}}$
            $\newcommand{\U}{\mathcal{U}}$
            $\begin{align*}
                \text{Let } & \Psi \subseteq \Phi \text{ be a totally ordered subset} \\
                & \U := \bigcup_{\E \in \Psi} \E \\
                & A, B \in \U
            \end{align*}$

            $\begin{align*}
                \overset{\text{T.O.}}{\implies} & \exists\, \E \in \Psi : A, B \in \E \\
                \implies & A \cap B \in \E \subseteq \U
            \end{align*}$

        Then, $\Phi$ has a maximal element which is an ultrafilter extending $\F$.


??? lemma "Lemma 5.39"
    ### Zorn's lemma <a id="l539"></a>

    Let $(P, \le)$ be a partially ordered set such that any totally ordered subset has an
    upper bound in $P$. Then, $P$ has a maximal element.


??? proposition "Proposition 5.40"
    ### Images of ultrafilters <a id="p540"></a>

    $\begin{align*}
        \text{Let } & f : X \to Y \text{ be a map} \\
        & \F \text{ be an ultrafilter on } X
    \end{align*}$

    $$\implies f(\F) \text{ is an ultrafilter on } Y$$

    ??? proof
        Let $A \subseteq Y$. By [R.5.37](#r537), we have either

        $$
        \begin{align*}
            (1) & \quad
            \begin{cases}
                f^{-1}(A) \in \F \\
                \implies A \supseteq f(f^{-1}(A)) \in f(\F)
            \end{cases} \\
            (2) & \quad
            \begin{cases}
                X \setminus f^{-1}(A) \in \F \\
                \implies Y \setminus A \supseteq f(f^{-1}(Y \setminus A)) \in f(\F)
            \end{cases}
        \end{align*}
        $$

        Again, by [R.5.37](#r537), we have that $f(\F)$ is an ultrafilter.