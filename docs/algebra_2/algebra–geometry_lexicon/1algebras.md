# Algebras

???+ definition "Definition: $R$-Algebra"
    A ring $A$ together with a homomorphism $\alpha : R \to A $ is called an $R$-algebra.

???+ definition "Definition: Sub-algebra"
    A ring $B \subseteq A$ s.t. </br>
    $\alpha (R) \subseteq B $

???+ definition "Definition: Algebra homomorphism"
    $\phi : A \to B$ is called an algebra homomorphism if for the ring homomorphisms </br>
    $\alpha : R \to A$ </br>
    $\beta : R \to B$ </br>
    we get that </br>
    $\phi \circ \alpha = \beta$

???+ definition "Definition: Affine ($K$)-algebra"
    $A$ is called an affine ($K$)-algebra if it is finitely generated. </br>
    I.e. $A = K[\underline{a}]$ for some $\underline a \in K^n$

???+ definition "Definition: Affine ($K$)-domain"
    $A$ is called an affine ($K$)-domain if it an affine algebra, which is also an integral domain.

???+ definition "Definition: Algebraic"
    Let $A$ be a $K$-algebra. </br>
    The element $a\in A$ is said to be algebraic if </br>
    $\exists\ 0 \neq f \in K[x] s.t. f(a) = 0$. </br></br>
    
    $A$ is called algebraic over $K$ if all it's elements are algebraic.