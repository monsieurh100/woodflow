		+--------------------------------------------------------------------------------------------------------------+
		| Gestion de la chaine d'approvisionnement																	   |
		| 																											   |
		| le client s'approvisionne en essence de bois 																   |	
		| puis l'essence de bois est transformé en diverse produit 													   |
		|																											   |
		+--------------------------------------------------------------------------------------------------------------+

- essence de bois
	*id
	*nom(afromosia,wenge,Tola,Iroko,Tali,Ebène noir)
	*prix

- produit 
	*planche ( Lx lx h)
	*triplex (Lx l)
	*résidu ( quantité) 
	*prix

-StockBois 
	*provenance
	*fournisseur 
	*codeTransaction
	*essence_bois
	*dimmension
	*quantite
	*prix 

- Transaction
	*dates
	*operation(approvisionnement,vente,transformation)
	*codeTransaction(varchar,unique)

-stockProduit
	*dates
	*operation(transformation,vente,sortie)
	*essence_bois
	*codeTransaction
	*produit
	*quantite
	*prix


-Charges
	*dates 
	*codeTransaction
	*charges
	*notification
	*montant 



