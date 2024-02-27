# 9 Duality in Hilbert spaces

??? theorem "Theorem 9.1"
    ## Riesz Representation Theorem <a id="t91"></a>

    $\begin{align*}
        \text{Let } & X \text{ be a Hilbert space} \\
        & l \in X^* = L(X, \K)
    \end{align*}$

    $$
    \begin{align*}
        \implies \exists!\ & \eta \in X \text{ s.t.} \\
        & l(x) = \inner{x}{\eta} \quad \forall\ x \in X
    \end{align*}
    $$

    !!! remark "Remark: $\text{T.9.1}\implies X \cong X^*$"

??? definition "Definition: Adjoint operator"
    ## Adjoint operator <a id="d91"></a>

    $\begin{align*}
        \text{Let } & X \text{ be a Hilbert space} \\
        & A \in L(X, X) \\
        & l_y(x):= \inner{Ax}{y} \quad \forall\ y \in X
    \end{align*}$

    Then, $l_y \in X^*$ and by [T.9.1](#t91), $\exists! \eta =: A^*y \in X$ s.t.

    $$\inner{Ax}{y} = \inner{x}{\eta} = \inner{x}{A^*y} \quad \forall\ x \in X$$

    $A^* : X \to X$ is called the **adjoint operator** of $A$.


??? proposition "Proposition 9.1"
    ## The adjoint operator is bounded and linear <a id="p91"></a>

    ??? proof
        === "Linearity"
            Follows from the linearity of the inner product.

        === "Boundedness"
            Follows from [P.9.2](#p92).


??? lemma "Lemma 9.1"
    <a id="l91"></a>

    Let $X$ be a Hilbert space.

    $$\inner{x}{\eta} = \inner{x}{\eta'} \quad \forall\ x \in X \iff \eta = \eta'$$

    ??? proof
        $$
        \begin{align*}
            &\inner{x}{\eta-\eta'} = 0 \quad \forall\ x \in X \\
            &\implies \inner{\eta-\eta'}{\eta-\eta'} = 0 \\
            &\implies \eta = \eta'
        \end{align*}
        $$

??? proposition "Proposition 9.2"
    ## Properties of the adjoint operator <a id="p92"></a>

    $\begin{align*}
        \text{Let } & X \text{ be a Hilbert space} \\
        & A, B \in L(X, X) \\
        & \lambda \in \K
    \end{align*}$

    Then, the following holds:

    1. $(A^*)^* = A$
    2. $(A + B)^* = A^* + B^*$
    3. $(\lambda A)^* = \overline \lambda A^*$
    4. $(AB)^* = B^*A^*$
    5. $\|A^*\| = \|A\|$


??? definition "Definition 9.2"
    ## Self-adjoint/Hermitian/Symmetric

    $$A = A^*$$

    ## Shew-symmetric

    $$A = -A^*$$

    ## Unitary

    $$A^*A = AA^* = I$$

    ## Normal

    $$A^*A = AA^*$$


???+ proposition "Proposition 9.3"
    $\begin{align*}
        \text{Let } & X \text{ be a Hilbert space} \\
        & A \in L(X, X)
    \end{align*}$

    $$
    \begin{align*}
        A &\text{ self-adjoint} & \implies &\Spec A \subseteq \R \\
        A &\text{ shew-symmetric} & \implies &\Spec A \subseteq i\R \\
        A &\text{ unitary} & \implies &\Spec A \subseteq s^1= \{\lambda \in \C : |\lambda| = 1\} \\
    \end{align*}
    $$